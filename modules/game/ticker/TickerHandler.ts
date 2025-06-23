import type { Ticker } from "pixi.js";
import Game from "@/modules/game/app/Game";
import BallsHandler from "../balls/BallsHandler";
import Platform from "../platform/Platform";
import { BonusesHandler } from "../bonuses/BonusesHandler";

export default class TickerHandler {
  static ticker: Ticker;
  static delta: number;

  public static init() {
    this.ticker = Game.app.ticker;

    this.ticker.add((time) => {
      const delta = time.deltaTime;
      this.delta = delta;

      BallsHandler.update();
      Platform.updatePosition();
      BonusesHandler.update();
    });

    this.ticker.minFPS = 60;
    this.ticker.maxFPS = 120;
  }

  public static stop() {
    this.ticker.stop();
  }

  public static start() {
    this.ticker.start();
  }
}
