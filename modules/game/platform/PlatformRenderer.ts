import { Sprite, Graphics } from "pixi.js";
import App from "@/modules/game/app/App";

export class PlatformRenderer {
  static createSprite(width: number, height: number, color: number): Sprite {
    const graphics = new Graphics()
      .beginFill(color)
      .drawRect(0, 0, width, height)
      .endFill();
    return new Sprite(App.app.renderer.generateTexture(graphics));
  }

  static setInitialPosition(sprite: Sprite, width: number, height: number) {
    const canvas = App.app.view as HTMLCanvasElement;
    sprite.x = (canvas.width - width) / 2; // Center horizontally
    sprite.y = canvas.height - height - 10; // Positioned near the bottom
  }
}
