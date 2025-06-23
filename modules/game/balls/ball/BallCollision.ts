import type { Ball } from "./Ball";
import LifesHandler from "../../lifes/LifesHandler";
import {
  getCanvasCollision,
  getBoundsCollision,
  CollisionSide,
} from "../../helpers/collision/collision";
import Game from "../../app/Game";
import { PlatformRenderer } from "../../platform/PlatformRenderer";
import BallsHandler from "../BallsHandler";

export default class BallCollision {
  constructor(private sprite: Ball) {}

  checkCollisions(): void {
    this.handleCanvasCollision();
    this.handlePlatformCollision();
  }

  private handleCanvasCollision(): void {
    const { width, height } = Game.getCanvas();
    const { width: spriteWidth, height: spriteHeight, movement } = this.sprite;
    const collisionSide = getCanvasCollision(this.sprite.getBounds());

    switch (collisionSide) {
      case CollisionSide.LEFT:
        this.handleLeftCollision(spriteWidth);
        break;
      case CollisionSide.RIGHT:
        this.handleRightCollision(width, spriteWidth);
        break;
      case CollisionSide.TOP:
        this.handleTopCollision();
        break;
      case CollisionSide.BOTTOM:
        this.handleBottomCollision();
        break;
    }
  }

  private handleLeftCollision(spriteWidth: number): void {
    this.sprite.x = 0;
    this.sprite.movement.reverseHorizontalDirection();
  }

  private handleRightCollision(canvasWidth: number, spriteWidth: number): void {
    this.sprite.x = canvasWidth - spriteWidth;
    this.sprite.movement.reverseHorizontalDirection();
  }

  private handleTopCollision(): void {
    this.sprite.movement.reverseVerticalDirection();
  }

  private handleBottomCollision(): void {
    this.sprite.movement.reverseVerticalDirection();
    BallsHandler.removeBall(this.sprite);
    if (BallsHandler.ballsList.length === 0) {
      LifesHandler.removeLife();
    }
  }

  private handlePlatformCollision(): void {
    if (
      getBoundsCollision(
        this.sprite.getBounds(),
        PlatformRenderer.sprite.getBounds()
      )
    ) {
      const { height: spriteHeight, movement } = this.sprite;
      this.sprite.y = PlatformRenderer.sprite.y - spriteHeight;
      movement.reverseVerticalDirection();
    }
  }
}
