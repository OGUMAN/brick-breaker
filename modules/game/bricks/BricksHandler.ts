import Game from "../app/Game";
import type { Brick } from "./Brick";
import { Container } from "pixi.js";

export class BricksHandler {
  static bricks: Brick[] = [];
  private static container: Container;

  static init() {
    this.container = new Container();
    Game.getStage().addChild(this.container);
  }

  static clear() {
    this.bricks.forEach((brick) => brick.destroy());
    this.bricks = [];
  }

  static addBrick(brick: Brick) {
    this.bricks.push(brick);
    this.container.addChild(brick);
  }

  static removeBrick(brick: Brick) {
    const brickIndex = this.bricks.findIndex(
      (b) => b.data.id === brick.data.id
    );

    if (brickIndex > -1) {
      this.bricks.splice(brickIndex, 1);

      this.container.removeChild(brick);
    }

    if (this.isLevelCompleted()) {
      Game.handleWin();
    }
  }

  static isLevelCompleted() {
    const allBricks = this.bricks.filter((brick) => brick.data.break);

    return allBricks.length === 0;
  }
}
