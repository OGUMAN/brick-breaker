import { Sprite, Graphics } from "pixi.js";
import BallCollision from "./BallCollision";
import BallMovement from "./BallMovement";
import App from "../../app/App";
import platformConfig from "../../platform/config";
import ballConfig from "./config";

export class Ball extends Sprite {
  private isAnimating = false;
  public movement = new BallMovement();
  private ballCollision = new BallCollision(this);
  private static radius = 7;

  constructor() {
    super(Ball.createTexture());
    this.setInitialPosition();
  }

  private static createTexture() {
    const graphics = new Graphics()
      .circle(0, 0, this.radius)
      .fill(ballConfig.color);
    return App.app.renderer.generateTexture(graphics);
  }

  private setInitialPosition() {
    const { width, height } = App.app.canvas;
    this.x = (width - Ball.radius) / 2;
    this.y = height - platformConfig.height * 2 - Ball.radius;
  }

  updatePosition() {
    this.movement.updatePosition(this);
    this.ballCollision.checkCollisions();
  }

  public playRespawnAnimation() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    const flicker = (count = 0) => {
      this.alpha = 1 - this.alpha; // toggles between 0 and 1
      if (count < 9) setTimeout(() => flicker(count + 1), 100);
      else {
        this.alpha = 1;
        this.isAnimating = false;
      }
    };

    flicker();
  }
}
