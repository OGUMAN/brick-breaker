import type { Ball } from "./Ball";
import LivesHandler from "../../lifes/LifesHandler";
import {
  getCanvasCollisions,
  getSpritesCollisions,
} from "../../helpers/collision";
import App from "../../app/App";
import { PlatformRenderer } from "../../platform/PlatformRenderer";

export default class BallCollision {
  constructor(private sprite: Ball) {}

  checkCollisions() {
    this.checkCanvasCollision();
    this.checkPlatformCollision();
  }

  private checkCanvasCollision() {
    const { width, height } = App.getCanvas();
    const { width: spriteWidth, height: spriteHeight, movement } = this.sprite;
    const { left, right, top, bottom } = getCanvasCollisions(this.sprite);

    if (left || right) {
      this.sprite.x = left ? 0 : width - spriteWidth;
      movement.reverseHorizontalDirection();
    }

    if (top || bottom) {
      this.sprite.y = top ? 0 : height - spriteHeight;
      if (bottom) LivesHandler.removeLife();
      movement.reverseVerticalDirection();
    }
  }

  private checkPlatformCollision() {
    if (getSpritesCollisions(this.sprite, PlatformRenderer.sprite) === "top") {
      const { height: spriteHeight, movement } = this.sprite;

      this.sprite.y = PlatformRenderer.sprite.y - spriteHeight;
      movement.reverseVerticalDirection();
    }
  }
}
