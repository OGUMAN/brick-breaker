import { Brick } from "./Brick";
import { BricksHandler } from "./BricksHandler";
import level from "./level.json";

export class LevelGenerator {
  static generateBricks() {
    BricksHandler.init();

    level.bricks.forEach((brickData) => {
      const brick = new Brick(brickData);
      BricksHandler.addBrick(brick);
    });
  }
}
