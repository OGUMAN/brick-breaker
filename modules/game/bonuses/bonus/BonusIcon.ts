import { Assets, Sprite } from "pixi.js";
import type { Bonus } from "./Bonus";

export class BonusIcon extends Sprite {
  constructor(private bonus: Bonus) {
    super();

    this.loadTexture();
    this.anchor.set(0.5);
    this.width = 20;
    this.height = 20;

    bonus.addChild(this);
  }

  private async loadTexture() {
    const texture = await Assets.load(this.bonus.bonusData.icon);
    this.texture = texture;
  }
}
