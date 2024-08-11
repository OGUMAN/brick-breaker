import { Container } from "pixi.js";
import { bonuses } from "../utils/bonuses";
import { BonusName, type IBonus } from "../utils/types";
import App from "../../app/App";
import { getSpritesCollisions } from "../../helpers/collision";
import { PlatformRenderer } from "../../platform/PlatformRenderer";
import { BonusBackground } from "./BonusBackground";
import { BonusIcon } from "./BonusIcon";
import type Platform from "../../platform/Platform";

export class Bonus extends Container {
  private bonusData: IBonus;
  private background: BonusBackground;
  private icon: BonusIcon;
  private collected = false;

  constructor(name: BonusName) {
    super();

    const bonus = bonuses.find((bonus) => bonus.name === name);
    if (!bonus) throw new Error(`Bonus with name ${name} not found`);

    this.bonusData = bonus;

    // Create the background and icon, then add them to the container
    this.background = new BonusBackground(this.bonusData.color);
    this.icon = new BonusIcon(this.bonusData.icon);

    this.addChild(this.background);
    this.addChild(this.icon);

    this.position.set(Math.random() * (App.app.canvas.width - this.width), 0);
  }

  public updatePosition() {
    this.y += 2; // Adjust speed as needed
  }

  public checkCollision() {
    const collisionSide = getSpritesCollisions(this, PlatformRenderer.sprite);

    if (collisionSide && !this.collected) {
      this.collected = true;
      this.bonusData.effect();
      this.destroyBonus();
    }
  }

  destroyBonus() {
    this.parent?.removeChild(this);
  }
}
