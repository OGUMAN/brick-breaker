import App from "@/modules/game/app/App";
import TickerHandler from "../ticker/TickerHandler";
import { getCanvasCollisions } from "../helpers/collision";
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
    const canvas = App.app.canvas;
    const collisions = getCanvasCollisions(PlatformRenderer.sprite);

    if (collisions.left) {
      PlatformRenderer.sprite.x = 0;
    } else if (collisions.right) {
      PlatformRenderer.sprite.x = canvas.width - platformConfig.width;
    }
  }
}
