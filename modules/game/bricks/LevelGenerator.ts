import { useLevelsStore } from "~/modules/levels/store";
import { Brick } from "./Brick";
import { BricksHandler } from "./BricksHandler";
import type { IBrick } from "./types";

export class LevelGenerator {
  static async generateBricks(levelData: IBrick[]) {
    const levelsStore = useLevelsStore();

    BricksHandler.clear();

    levelData.forEach((brickData: IBrick) => {
      const brick = new Brick(brickData);
      BricksHandler.addBrick(brick);
    });
  }
}
