import type { Sprite } from "pixi.js";

export function testForAABB(sprite1: Sprite, sprite2: Sprite) {
  return !(
    sprite1.x + sprite1.width < sprite2.x ||
    sprite1.x > sprite2.x + sprite2.width ||
    sprite1.y + sprite1.height < sprite2.y ||
    sprite1.y > sprite2.y + sprite2.height
  );
}

export function checkSpriteCanvasCollision(
  sprite: Sprite,
  canvas: HTMLCanvasElement
) {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  return (
    sprite.x < 0 ||
    sprite.x + sprite.width > canvasWidth ||
    sprite.y < 0 ||
    sprite.y + sprite.height > canvasHeight
  );
}
