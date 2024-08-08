import { Application } from "pixi.js";
import BallsHandler from "../balls/BallsHandler";
import TickerHandler from "../ticker/TickerHandler";
import Platform from "../platform/Platform";

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

    BallsHandler.addBall();
    Platform.initialize();
    TickerHandler.init();
  }
}
