import { Application } from "pixi.js";
import BallsHandler from "../balls/BallsHandler";
import TickerHandler from "../ticker/TickerHandler";
import Platform from "../platform/Platform";
import LifesBar from "../lifes/bar/LifesBar";
import { LevelGenerator } from "../bricks/LevelGenerator";
import { useLevelsStore } from "~/modules/levels/store";
import LifesHandler from "../lifes/LifesHandler";
import { PlatformRenderer } from "../platform/PlatformRenderer";
import { BonusesHandler } from "../bonuses/BonusesHandler";
import { useGameStore } from "../gameStore";
import { BricksHandler } from "../bricks/BricksHandler";

export default class Game {
  public static app: Application;

  public static async init(canvas: HTMLCanvasElement) {
    this.app = new Application();
    await this.app.init({
      backgroundAlpha: 0,
      preference: "webgpu",
      resizeTo: canvas,
      canvas: canvas,
    });

    this.app.stage.interactive = true;
    this.app.stage.hitArea = this.app.renderer.screen;

    BallsHandler.init();
    Platform.init();
    TickerHandler.init();
    LifesBar.init();
    BricksHandler.init();

    LevelGenerator.generateBricks();
  }

  public static getCanvas() {
    return this.app.canvas;
  }

  public static getStage() {
    return this.app.stage;
  }

  public static pause() {
    this.app.ticker.stop();
  }

  public static resume() {
    this.app.ticker.start();
  }

  public static handleWin() {
    const gameStore = useGameStore();
    gameStore.isWonDialog = true;
  }

  public static handleLose() {
    const gameStore = useGameStore();
    gameStore.isLoseDialog = true;
    this.pause();
  }

  public static playAgain() {
    LevelGenerator.generateBricks();
    LifesHandler.reset();
    PlatformRenderer.reset();
    BallsHandler.reset();
    BonusesHandler.clear();
  }

  public static nextLevel() {
    const levelsStore = useLevelsStore();
    levelsStore.currentLevel = levelsStore.currentLevel + 1;

    LevelGenerator.generateBricks();
  }
}
