import { Container, FederatedMouseEvent } from "pixi.js";
import Game from "../app/Game";
import { Ball } from "./ball/Ball";
import { BricksHandler } from "../bricks/BricksHandler";
import {
  CollisionSide,
  getBoundsCollision,
} from "../helpers/collision/collision";
import { BonusName } from "../bonuses/utils/types";
import { BonusesHandler } from "../bonuses/BonusesHandler";
import { TrajectoryLine } from "./trajectory/TrajectoryLine";
import ballConfig from "./ball/config";

export default class BallsHandler {
  static ballsList: Ball[] = [];
  private static container = new Container();
  private static isUpdating = false;

  static init() {
    Game.getStage().addChild(this.container);
    TrajectoryLine.init();
    BallsHandler.addBall();
  }

  static reset() {
    this.ballsList.length = 0;
    this.container.removeChildren();

    BallsHandler.addBall();
  }

  static removeBall(ball: Ball) {
    this.ballsList = this.ballsList.filter((b) => b !== ball);
    this.container.removeChild(ball);
  }

  static addBall() {
    const newBall = new Ball();
    this.ballsList.push(newBall);
    this.container.addChild(newBall);

    if (this.ballsList.length === 1) {
      this.handleFirstBall();
    }
  }

  static handleFirstBall() {
    this.isUpdating = false;
    const stage = Game.getStage();

    // Enable interaction on the stage
    stage.interactive = true;

    stage.on("pointerleave", this.handlePointerLeave.bind(this));
    stage.on("pointermove", this.handlePointerMove.bind(this));
    stage.on("pointerdown", this.launchBall.bind(this));
  }

  static handlePointerLeave() {
    TrajectoryLine.remove();
  }

  static handlePointerMove(event: FederatedMouseEvent) {
    const { x, y } = event.data.global;
    const firstBall = this.ballsList[0];
    TrajectoryLine.draw(
      x,
      y,
      firstBall.x + ballConfig.radius,
      firstBall.y + ballConfig.radius
    );
  }

  private static launchBall(event: FederatedMouseEvent) {
    const stage = Game.getStage();

    this.isUpdating = true;
    stage.off("pointerleave", this.handlePointerLeave.bind(this));
    stage.off("pointermove", this.handlePointerMove, this);
    stage.off("pointerdown", this.launchBall, this);

    const firstBall = this.ballsList[0];
    const ballPosition = {
      x: firstBall.x + ballConfig.radius,
      y: firstBall.y + ballConfig.radius,
    };

    TrajectoryLine.remove();

    // Calculate direction based on the stage coordinates
    const direction = this.calculateDirection(
      ballPosition,
      event.data.global.x,
      event.data.global.y
    );
    this.ballsList[0].movement.setDirection(direction);
  }

  private static calculateDirection(
    start: { x: number; y: number },
    targetX: number,
    targetY: number
  ): number {
    const dx = targetX - start.x;
    const dy = targetY - start.y;

    // Calculate the angle using Math.atan2, which correctly handles quadrant-based angles
    return Math.atan2(dy, dx);
  }

  static removeBalls() {
    this.ballsList.length = 0;
    this.container.removeChildren();
  }

  static checkCollision(ball: Ball) {
    BricksHandler.bricks.forEach((brick) => {
      brick.getCellsBounds().forEach((bounds) => {
        const collidedSide = getBoundsCollision(ball.getBounds(), bounds);
        if (collidedSide) {
          console.log(CollisionSide[collidedSide]);
        }

        if (
          collidedSide === CollisionSide.LEFT ||
          collidedSide === CollisionSide.RIGHT
        ) {
          ball.movement.reverseHorizontalDirection();

          if (brick.data.break) {
            BricksHandler.removeBrick(brick);

            if (brick.data.bonus) {
              BonusesHandler.addBonus(brick.data.bonus as BonusName);
            }
          }
        } else if (
          collidedSide === CollisionSide.TOP ||
          collidedSide === CollisionSide.BOTTOM
        ) {
          ball.movement.reverseVerticalDirection();

          if (brick.data.break) {
            BricksHandler.removeBrick(brick);

            if (brick.data.bonus) {
              BonusesHandler.addBonus(brick.data.bonus as BonusName);
            }
          }
        }
      });
    });
  }

  static update() {
    if (this.isUpdating) {
      this.ballsList.forEach((ball) => {
        ball.updatePosition();
        this.checkCollision(ball);
      });
    }
  }
}
