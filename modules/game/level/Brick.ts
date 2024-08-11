import { Graphics, Sprite } from "pixi.js";
import brickConfig from "./brickConfig";
import App from "../app/App";
import type { IBrick } from "./types";

export class Brick extends Sprite {
  public data: IBrick;

  constructor(brick: IBrick) {
    super();

    this.data = brick;
    this.texture = this.createTexture();
    this.position.set(
      Math.min(...brick.cells.map((cell) => cell.x)) * brickConfig.cellWidth,
      Math.min(...brick.cells.map((cell) => cell.y)) * brickConfig.cellHeight
    );
  }

  private createTexture() {
    const graphics = new Graphics();
    this.data.cells.forEach((cell) => {
      graphics
        .rect(
          (cell.x - Math.min(...this.data.cells.map((cell) => cell.x))) *
            brickConfig.cellWidth,
          (cell.y - Math.min(...this.data.cells.map((cell) => cell.y))) *
            brickConfig.cellHeight,
          brickConfig.cellWidth,
          brickConfig.cellHeight
        )
        .fill(this.data.color);
    });

    return App.app.renderer.generateTexture(graphics);
  }
}
