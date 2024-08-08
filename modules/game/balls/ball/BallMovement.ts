import { Sprite } from "pixi.js";
import TickerHandler from "../../ticker/TickerHandler";

export default class BallMovement {
  private speed: number;
  private direction: number;

  constructor(speed: number, direction: number) {
    this.speed = speed;
    this.direction = direction;
  }

  updatePosition(sprite: Sprite) {
    sprite.x += this.speed * Math.cos(this.direction) * TickerHandler.delta;
    sprite.y += this.speed * Math.sin(this.direction) * TickerHandler.delta;
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
