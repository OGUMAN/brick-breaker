import { Sprite, Graphics } from "pixi.js";
import CollisionDetector from "./BallCollision";
import BallMovement from "./BallMovement";
import Platform from "../../platform/Platform";
import App from "../../app/App";

export class Ball extends Sprite {
  private radius: number;
  private movement: BallMovement;
  private collisionDetector: CollisionDetector;

  constructor(
    radius: number = 7,
    color: number = 0x000000,
    speed: number = 12,
    direction: number = Math.PI / 6
  ) {
    super(Ball.createTexture(radius, color));

    this.radius = radius;
    this.movement = new BallMovement(speed, direction);
    this.collisionDetector = new CollisionDetector(this);

    this.setInitialPosition();
  }

  private static createTexture(radius: number, color: number) {
    const graphics = new Graphics()
      .beginFill(color)
      .drawCircle(0, 0, radius)
      .endFill();
    return App.app.renderer.generateTexture(graphics);
  }

  private setInitialPosition() {
    this.x = this.radius;
    this.y = this.radius;
  }

  updatePosition() {
    this.movement.updatePosition(this);
    this.checkPlatformCollision();
  }

  checkCanvasCollision(canvas: HTMLCanvasElement) {
    this.collisionDetector.checkCanvasCollision(canvas);
  }

  private checkPlatformCollision() {
    if (this.collisionDetector.checkPlatformCollision(Platform.getSprite())) {
      this.movement.reverseVerticalDirection();
      this.y = Platform.getSprite().y - this.height; // Prevent sticking to the platform
    }
  }
}
