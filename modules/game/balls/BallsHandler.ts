import { Container } from "pixi.js";
import App from "../app/App";
import { Ball } from "./ball/Ball";
import { BricksHandler } from "../level/BricksHandler";
import { getSpritesCollisions } from "../helpers/collision";
import { BonusesHandler } from "../bonuses/BonusesHandler";
import { BonusName } from "../bonuses/utils/types";

export default class BallsHandler {
  static ballsList: Ball[] = [];
  private static container = new Container();

  static init() {
    App.getStage().addChild(this.container);
  }

  static addBall() {
    const newBall = new Ball();
    this.ballsList.push(newBall);
    this.container.addChild(newBall);
  }

  static removeBalls() {
    this.ballsList.length = 0;
    this.container.removeChildren();
  }

  static checkCollision(ball: Ball) {
    BricksHandler.bricks.forEach((brick) => {
      const collidedSide = getSpritesCollisions(ball, brick);

      if (collidedSide === "left" || collidedSide === "right") {
        ball.movement.reverseHorizontalDirection();
        BricksHandler.removeBrick(brick);
        BonusesHandler.addBonus(BonusName.ExtraLife);
      } else if (collidedSide === "top" || collidedSide === "bottom") {
        ball.movement.reverseVerticalDirection();
        BricksHandler.removeBrick(brick);
        BonusesHandler.addBonus(BonusName.ExtraLife);
      }
    });
  }

  static update() {
    this.ballsList.forEach((ball) => {
      ball.updatePosition();
      this.checkCollision(ball);
    });
  }
}
