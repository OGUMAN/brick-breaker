import Game from "../app/Game";
import { Bonus } from "./bonus/Bonus";
import type { BonusName } from "./utils/types";

export class BonusesHandler {
  private static bonuses: Bonus[] = [];

  static clear() {
    this.bonuses.forEach((bonus) => bonus.destroyBonus());
    this.bonuses = [];
  }

  public static addBonus(name: BonusName) {
    const bonus = new Bonus(name);
    this.bonuses.push(bonus);
    Game.getStage().addChild(bonus);
  }

  public static update() {
    this.bonuses.forEach((bonus, index) => {
      bonus.updatePosition();
      bonus.checkCollision();
      if (bonus.y > Game.app.canvas.height) {
        this.removeBonus(index);
      }
    });
  }

  private static removeBonus(index: number) {
    this.bonuses[index].destroyBonus();
    this.bonuses.splice(index, 1);
  }

  public static clearBonuses() {
    this.bonuses.forEach((bonus) => bonus.destroyBonus());
    this.bonuses = [];
  }
}
