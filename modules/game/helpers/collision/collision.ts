import { Bounds } from "pixi.js";
import Game from "../../app/Game";

export enum CollisionSide {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

export function getBoundsCollision(bounds1: Bounds, bounds2: Bounds): CollisionSide | null {
  const isNoOverlap = 
    bounds1.x + bounds1.width < bounds2.x || // bounds1 is completely to the left of bounds2
    bounds1.x > bounds2.x + bounds2.width || // bounds1 is completely to the right of bounds2
    bounds1.y + bounds1.height < bounds2.y || // bounds1 is completely above bounds2
    bounds1.y > bounds2.y + bounds2.height; // bounds1 is completely below bounds2

  if (isNoOverlap) {
    return null; // No collision
  }

  // Calculate overlap on both axes
  const overlapX = Math.min(
    bounds1.x + bounds1.width - bounds2.x, 
    bounds2.x + bounds2.width - bounds1.x
  );

  const overlapY = Math.min(
    bounds1.y + bounds1.height - bounds2.y, 
    bounds2.y + bounds2.height - bounds1.y
  );

  // Determine the side of collision based on the smaller overlap
  if (overlapX < overlapY) {
    return bounds1.x < bounds2.x ? CollisionSide.LEFT : CollisionSide.RIGHT;
  } else {
    return bounds1.y < bounds2.y ? CollisionSide.TOP : CollisionSide.BOTTOM;
  }
}


export function getCanvasCollision(bounds: Bounds): CollisionSide | null {
  const canvas = Game.getCanvas();
  const canvasBounds = new Bounds(0, 0, canvas.width, canvas.height);

  if (bounds.x < canvasBounds.x) {
    return CollisionSide.LEFT;
  }
  if (bounds.x + bounds.width > canvasBounds.x + canvasBounds.width) {
    return CollisionSide.RIGHT;
  }
  if (bounds.y < canvasBounds.y) {
    return CollisionSide.TOP;
  }
  if (bounds.y + bounds.height > canvasBounds.y + canvasBounds.height) {
    return CollisionSide.BOTTOM;
  }

  return null; // No collision, object is within canvas bounds
}
