import { Sprite } from "pixi.js";

export default class BallCollision {
  private sprite: Sprite;

  constructor(sprite: Sprite) {
    this.sprite = sprite;
  }

  checkCanvasCollision(canvas: HTMLCanvasElement) {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    this.checkHorizontalCollision(canvasWidth);
    this.checkVerticalCollision(canvasHeight);
  }

  private checkHorizontalCollision(canvasWidth: number) {
    if (this.sprite.x < 0) {
      this.sprite.x = 0;
      this.reverseHorizontalDirection();
    } else if (this.sprite.x + this.sprite.width > canvasWidth) {
      this.sprite.x = canvasWidth - this.sprite.width;
      this.reverseHorizontalDirection();
    }
  }

  private checkVerticalCollision(canvasHeight: number) {
    if (this.sprite.y < 0) {
      this.sprite.y = 0;
      this.reverseVerticalDirection();
    } else if (this.sprite.y + this.sprite.height > canvasHeight) {
      this.sprite.y = canvasHeight - this.sprite.height;
      this.reverseVerticalDirection();
    }
  }

  checkPlatformCollision(platformSprite: Sprite): boolean {
    return BallCollision.testForAABB(this.sprite, platformSprite);
  }

  private reverseVerticalDirection() {
    this.sprite["movement"].reverseVerticalDirection()
  }

  private reverseHorizontalDirection() {
    this.sprite["movement"].reverseHorizontalDirection();
  }

  static testForAABB(ball: Sprite, platform: Sprite): boolean {
    const ballBounds = ball.getBounds();
    const platformBounds = platform.getBounds();

    return (
      ballBounds.x < platformBounds.x + platformBounds.width &&
      ballBounds.x + ballBounds.width > platformBounds.x &&
      ballBounds.y < platformBounds.y + platformBounds.height &&
      ballBounds.y + ballBounds.height > platformBounds.y
    );
  }
}
