import { Sprite } from "pixi.js";
import TickerHandler from "../../ticker/TickerHandler";
import ballConfig from "./config";

export default class BallMovement {
  private direction: number; // Angle in radians

  constructor() {
    this.direction = -1;
  }

  updatePosition(sprite: Sprite) {
    sprite.x +=
      ballConfig.speed * Math.cos(this.direction) * TickerHandler.delta;
    sprite.y +=
      ballConfig.speed * Math.sin(this.direction) * TickerHandler.delta;
  }

  reverseVerticalDirection() {
    this.direction = -this.direction;
    if (this.direction < 0) {
      this.direction += 2 * Math.PI;
    }
  }
  
  reverseHorizontalDirection() {
    // Reverse the horizontal direction
    this.direction = Math.PI - this.direction;

    // Normalize the direction to ensure it stays within [0, 2 * Math.PI]
    if (this.direction < 0) {
      this.direction += 2 * Math.PI;
    } else if (this.direction >= 2 * Math.PI) {
      this.direction -= 2 * Math.PI;
    }
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction: number) {
    this.direction = direction;
  }
}
