import App from "@/modules/game/app/App";
import { PlatformMovement } from "./PlatformMovement";
import { PlatformRenderer } from "./PlatformRenderer";
import { PlatformInput } from "./PlatformInput";

export default class Platform {
  static initialize() {
    PlatformRenderer.init();

    PlatformInput.addKeyboardListeners();
    App.app.stage.addChild(PlatformRenderer.sprite);
  }

  static updatePosition() {
    PlatformMovement.updatePosition();
  }
}
