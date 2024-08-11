import { Assets, Sprite } from "pixi.js";

export class BonusIcon extends Sprite {
  constructor(private iconPath: string) {
    super();

    this.loadTexture();
    this.anchor.set(0.5);
    this.width = 23;
    this.height = 23;
  }

  private async loadTexture() {
    const texture = await Assets.load(this.iconPath);
    this.texture = texture;
  }
}
