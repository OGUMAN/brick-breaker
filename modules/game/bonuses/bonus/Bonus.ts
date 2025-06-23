import Game from "../../app/Game";
import { Container } from "pixi.js";
import { bonuses } from "../utils/bonuses";
import { BonusName, type IBonus } from "../utils/types";
import { getBoundsCollision } from "../../helpers/collision/collision";
import { PlatformRenderer } from "../../platform/PlatformRenderer";
import { BonusBackground } from "./BonusBackground";
import { BonusIcon } from "./BonusIcon";

export class Bonus extends Container {
  public bonusData: IBonus;
  private background: BonusBackground;
  private icon: BonusIcon;
  private collected = false;

  constructor(name: BonusName) {
    super();

    const bonus = bonuses.find((bonus) => bonus.name === name);
    if (!bonus) throw new Error(`Bonus with name ${name} not found`);

    this.bonusData = bonus;

    this.background = new BonusBackground(this);
    this.icon = new BonusIcon(this);

    this.position.set(Math.random() * (Game.app.canvas.width - this.width), 0);
  }

  public updatePosition() {
    if (this.y > Game.app.canvas.height) {
      this.destroyBonus();
      return;
    }

    this.y += 2;
  }

  public checkCollision() {
    const collisionSide = getBoundsCollision(
      this.getBounds(),
      PlatformRenderer.sprite.getBounds()
    );

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
