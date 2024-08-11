import type { Container, Sprite } from "pixi.js";
import App from "../app/App";

export function getSpritesCollisions(
  sprite1: Sprite | Container,
  sprite2: Sprite
) {
  const boundsA = sprite1.getBounds();
  const boundsB = sprite2.getBounds();

  // Check for overlap
  if (
    !(
      boundsA.x + boundsA.width < boundsB.x ||
      boundsA.x > boundsB.x + boundsB.width ||
      boundsA.y + boundsA.height < boundsB.y ||
      boundsA.y > boundsB.y + boundsB.height
    )
  ) {
    // Collision detected, determine side
    const overlapX = Math.min(
      boundsA.x + boundsA.width - boundsB.x,
      boundsB.x + boundsB.width - boundsA.x
    );

    const overlapY = Math.min(
      boundsA.y + boundsA.height - boundsB.y,
      boundsB.y + boundsB.height - boundsA.y
    );

    if (overlapX < overlapY) {
      return boundsA.x < boundsB.x ? "left" : "right";
    } else {
      return boundsA.y < boundsB.y ? "top" : "bottom";
    }
  }

  return null; // No collision
}

export function getCanvasCollisions(sprite: Sprite) {
  const canvas = App.getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const collisions = {
    left: sprite.x < 0,
    right: sprite.x + sprite.width > canvasWidth,
    top: sprite.y < 0,
    bottom: sprite.y + sprite.height > canvasHeight,
  };

  return collisions;
}
