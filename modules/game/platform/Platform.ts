import App from "@/modules/game/app/App";
import { Sprite } from "pixi.js";
import { PlatformMovement } from "./PlatformMovement";
import { PlatformRenderer } from "./PlatformRenderer";
import { PlatformInput } from "./PlatformInput";

export default class Platform {
  private static sprite: Sprite;
  private static movement: PlatformMovement;

  static initialize(
    width: number = 90,
    height: number = 12,
    color: number = 0x000000,
    speed: number = 10
  ) {
    Platform.sprite = PlatformRenderer.createSprite(width, height, color);
    PlatformRenderer.setInitialPosition(Platform.sprite, width, height);
    Platform.movement = new PlatformMovement(Platform.sprite, speed);

    PlatformInput.addKeyboardListeners(Platform.movement);
    App.app.stage.addChild(this.getSprite());
  }

  static updatePosition() {
    Platform.movement.updatePosition();
  }

  static getSprite(): Sprite {
    return Platform.sprite;
  }
}
