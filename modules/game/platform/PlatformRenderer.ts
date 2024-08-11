import { Sprite, Graphics } from "pixi.js";
import App from "@/modules/game/app/App";
import platformConfig from "./config";

export class PlatformRenderer {
  static sprite: Sprite;

  static init() {
    this.createSprite();
    this.setInitialPosition();
  }

  static createSprite() {
    const graphics = new Graphics()
      .rect(0, 0, platformConfig.width, platformConfig.height)
      .fill(platformConfig.color);
    this.sprite = new Sprite(App.app.renderer.generateTexture(graphics));
  }

  static setInitialPosition() {
    const canvas = App.app.view as HTMLCanvasElement;
    this.sprite.x = (canvas.width - platformConfig.width) / 2; // Center horizontally
    this.sprite.y = canvas.height - platformConfig.height - 10; // Positioned near the bottom
  }
}
