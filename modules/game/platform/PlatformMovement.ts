import { Sprite } from "pixi.js";
import App from "@/modules/game/app/App";
import TickerHandler from "../ticker/TickerHandler";

export class PlatformMovement {
  private sprite: Sprite;
  private speed: number;
  private isMovingLeft: boolean = false;
  private isMovingRight: boolean = false;

  constructor(sprite: Sprite, speed: number) {
    this.sprite = sprite;
    this.speed = speed;
  }

  setMovingLeft(isMoving: boolean) {
    this.isMovingLeft = isMoving;
  }

  setMovingRight(isMoving: boolean) {
    this.isMovingRight = isMoving;
  }

  updatePosition() {
    if (this.isMovingLeft) {
      this.sprite.x -= this.speed * TickerHandler.delta;
    } else if (this.isMovingRight) {
      this.sprite.x += this.speed * TickerHandler.delta;
    }

    this.checkCanvasCollision();
  }

  private checkCanvasCollision() {
    const canvas = App.app.canvas as HTMLCanvasElement;
    if (this.sprite.x < 0) {
      this.sprite.x = 0;
    } else if (this.sprite.x + this.sprite.width > canvas.width) {
      this.sprite.x = canvas.width - this.sprite.width;
    }
  }
}
