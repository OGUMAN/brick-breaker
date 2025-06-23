import { Graphics } from "pixi.js";
import Game from "../../app/Game";
import { CollisionSide } from "../../helpers/collision/collision";
import { TrajectoryDirection } from "./TrajectoryDirection";
import TrajectoryCollision from "./TrajectoryCollision";

export default class TrajectoryRender {
  private static graphics: Graphics;
  public static direction: number;

  static init() {
    TrajectoryRender.graphics = new Graphics();
    Game.getStage().addChild(TrajectoryRender.graphics);
  }

  public static draw(
    mouseX: number,
    mouseY: number,
    startX: number,
    startY: number
  ) {
    this.graphics.clear();

    if (mouseX === startX && mouseY === startY) {
      return;
    }

    this.direction = Math.atan2(mouseY - startY, mouseX - startX);
    let position = { x: startX, y: startY };
    let remainingCollisions = 2;

    let iterationCount = 0;
    const maxIterations = 1000;
    const dotSpacing = 10; // Distance between dots
    const dotRadius = 2; // Size of each dot

    while (remainingCollisions > 0 && iterationCount < maxIterations) {
      iterationCount++;
      const dx = Math.cos(this.direction);
      const dy = Math.sin(this.direction);

      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        position.x += dx * dotSpacing;
        position.y += dy * dotSpacing;
      } else {
        break;
      }

      // Draw dot
      this.graphics.beginFill(0x000000);
      this.graphics.drawCircle(position.x, position.y, dotRadius);
      this.graphics.endFill();

      const collisionSide = TrajectoryCollision.detectCollision(position);

      if (collisionSide !== null) {
        this.handleCollision(collisionSide);
        remainingCollisions--;
        this.normalizeDirection();
      }
    }
  }

  public static remove() {
    this.graphics.clear();
  }

  private static normalizeDirection() {
    if (this.direction < 0) {
      this.direction += 2 * Math.PI;
    } else if (this.direction >= 2 * Math.PI) {
      this.direction -= 2 * Math.PI;
    }
  }

  private static handleCollision(collisionSide: CollisionSide) {
    switch (collisionSide) {
      case CollisionSide.LEFT:
      case CollisionSide.RIGHT:
        TrajectoryDirection.reverseHorizontalDirection();
        break;
      case CollisionSide.TOP:
      case CollisionSide.BOTTOM:
        TrajectoryDirection.reverseVerticalDirection();
        break;
    }
  }
}
