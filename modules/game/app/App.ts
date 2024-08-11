import { Application } from "pixi.js";
import BallsHandler from "../balls/BallsHandler";
import TickerHandler from "../ticker/TickerHandler";
import Platform from "../platform/Platform";
import LivesBar from "../lifes/bar/LifesBar";
import { LevelGenerator } from "../level/LevelGenerator";

export default class App {
  public static app: Application;

  public static async init(canvas: HTMLCanvasElement) {
    this.app = new Application();
    await this.app.init({
      backgroundAlpha: 0,
      preference: "webgpu",
      resizeTo: canvas,
      canvas: canvas,
    });

    BallsHandler.init();
    BallsHandler.addBall();
    Platform.initialize();
    TickerHandler.init();
    LivesBar.init();
    LevelGenerator.generateBricks();
  }

  public static getCanvas() {
    return this.app.canvas;
  }

  public static getStage() {
    return this.app.stage;
  }
}
