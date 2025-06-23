import { Sprite, Graphics } from "pixi.js";
import Game from "../../app/Game";
import type { Bonus } from "./Bonus";

export class BonusBackground extends Sprite {
  constructor(bonus: Bonus) {
    super();
    this.texture = this.createTexture(bonus.bonusData.color);
    this.anchor = 0.5;
    bonus.addChild(this);
  }

  private createTexture(color: string) {
    const graphics = new Graphics();
    graphics.circle(0, 0, 13).fill(color);
    return Game.app.renderer.generateTexture(graphics);
  }
}
