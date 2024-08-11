import { Assets, Container, Sprite, Texture, Text } from "pixi.js";
import LivesHandler from "../LifesHandler";
import App from "../../app/App";
import heart from "./mdi-heart.png";

export default class LivesBar {
  private static container: Container;
  private static liveTexture: Texture;

  public static async init() {
    this.container = new Container({
      y: 15,
      x: App.app.canvas.width - 125,
    });
    App.app.stage.addChild(this.container);
    this.liveTexture = await Assets.load(heart);
    this.update();
  }

  public static update() {
    this.container.removeChildren();

    Array.from({ length: LivesHandler.lifes }).forEach((_, i) => {
      this.container.addChild(
        new Sprite({
          texture: this.liveTexture,
          x: i * 30,
          width: 25,
          height: 25,
          tint: 0xef5a6f,
        })
      );
    });
  }
}
