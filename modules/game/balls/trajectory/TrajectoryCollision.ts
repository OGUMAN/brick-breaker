import { Bounds } from "pixi.js";
import { BricksHandler } from "../../bricks/BricksHandler";
import {
  getBoundsCollision,
  getCanvasCollision,
  type CollisionSide,
} from "../../helpers/collision/collision";
import ballConfig from "../ball/config";
import { PlatformRenderer } from "../../platform/PlatformRenderer";

export default class TrajectoryCollision {
  public static detectCollision(position: {
    x: number;
    y: number;
  }): CollisionSide | null {
    const TRAJECTORY_BOUNDS = new Bounds(
      position.x,
      position.y,
      position.x,
      position.y
    );

    const WALL_COLLISION = getCanvasCollision(TRAJECTORY_BOUNDS);
    const PLATFORM_COLLISION = getBoundsCollision(
      TRAJECTORY_BOUNDS,
      PlatformRenderer.sprite.getBounds()
    );

    return (
      this.detectBrickCollision(position) ??
      WALL_COLLISION ??
      PLATFORM_COLLISION
    );
  }

  private static detectBrickCollision(position: {
    x: number;
    y: number;
  }): CollisionSide | null {
    const ballBounds = this.createBallBounds(position);

    for (const brick of BricksHandler.bricks) {
      const collisionSide = getBoundsCollision(ballBounds, brick.getBounds());
      if (collisionSide) return collisionSide;
    }

    return null;
  }

  private static createBallBounds(position: { x: number; y: number }): Bounds {
    const { radius } = ballConfig;
    return {
      x: position.x,
      y: position.y,
      width: radius * 2,
      height: radius * 2,
    } as Bounds;
  }
}
