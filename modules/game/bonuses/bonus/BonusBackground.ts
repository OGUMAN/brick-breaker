import { Sprite, Graphics } from "pixi.js";
import App from "../../app/App";

export class BonusBackground extends Sprite {
  constructor(color: string) {
    super();
    this.texture = this.createTexture(color);
    this.anchor = 0.5;
  }

  private createTexture(color: string) {
    const graphics = new Graphics();
    graphics.circle(0, 0, 15).fill(color);
    return App.app.renderer.generateTexture(graphics);
  }
}
