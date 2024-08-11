import { Sprite } from "pixi.js";
import TickerHandler from "../../ticker/TickerHandler";
import ballConfig from "./config";

export default class BallMovement {
  private direction: number; // Angle in radians

  constructor() {
    this.direction = Math.random() * 2 * Math.PI; // Random initial direction
  }

  updatePosition(sprite: Sprite) {
    sprite.x +=
      ballConfig.speed * Math.cos(this.direction) * TickerHandler.delta;
    sprite.y +=
      ballConfig.speed * Math.sin(this.direction) * TickerHandler.delta;
  }

  reverseVerticalDirection() {
    this.direction = -this.direction;
  }

  reverseHorizontalDirection() {
    this.direction = Math.PI - this.direction;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction: number) {
    this.direction = direction;
  }
}
