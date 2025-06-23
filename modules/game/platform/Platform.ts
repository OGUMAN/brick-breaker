import Game from "~/modules/game/app/Game";
import { PlatformMovement } from "./PlatformMovement";
import { PlatformRenderer } from "./PlatformRenderer";
import { PlatformInput } from "./PlatformInput";

export default class Platform {
  static init() {
    PlatformRenderer.init();

    PlatformInput.addKeyboardListeners();
    Game.app.stage.addChild(PlatformRenderer.sprite);
  }

  static updatePosition() {
    PlatformMovement.updatePosition();
  }
}
