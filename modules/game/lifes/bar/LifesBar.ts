import { Assets, Container, Sprite, Texture } from "pixi.js";
import LifesHandler from "../LifesHandler";
import Game from "../../app/Game";
import heart from "./mdi-heart.png";

export default class LifesBar {
  private static container: Container;
  private static lifeTexture: Texture;

  public static async init() {
    this.container = new Container({
      y: 15,
    });
    Game.app.stage.addChild(this.container);
    this.lifeTexture = await Assets.load(heart);
    this.update();
  }

 public static update() {
  this.container.removeChildren();

  Array.from({ length: LifesHandler.lifes }).forEach((_, i) => {
    this.container.addChild(
      new Sprite({
        texture: this.lifeTexture,
        x: 15 + i * 30, // Render from left side with padding 15
        width: 25,
        height: 25,
        tint: 0xef5a6f,
      })
    );
  });
}

}
