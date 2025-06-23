import Game from "~/modules/game/app/Game";
import TickerHandler from "../ticker/TickerHandler";
import { CollisionSide, getCanvasCollision } from "../helpers/collision/collision";
import { PlatformRenderer } from "./PlatformRenderer";
import platformConfig from "./config";

export class PlatformMovement {
  private static isMovingLeft: boolean = false;
  private static isMovingRight: boolean = false;

  static setMovingLeft(isMoving: boolean) {
    this.isMovingLeft = isMoving;
  }

  static setMovingRight(isMoving: boolean) {
    this.isMovingRight = isMoving;
  }

  static updatePosition() {
    if (this.isMovingLeft) {
      PlatformRenderer.sprite.x -= platformConfig.speed * TickerHandler.delta;
    } else if (this.isMovingRight) {
      PlatformRenderer.sprite.x += platformConfig.speed * TickerHandler.delta;
    }

    this.checkCanvasCollision();
  }

  private static checkCanvasCollision() {
    const canvas = Game.app.canvas;
    const collisionSide = getCanvasCollision(
      PlatformRenderer.sprite.getBounds()
    );

    if (collisionSide === CollisionSide.LEFT) {
      PlatformRenderer.sprite.x = 0;
    } else if (collisionSide === CollisionSide.RIGHT) {
      PlatformRenderer.sprite.x = canvas.width - platformConfig.width;
    }
  }
}
