import { PlatformMovement } from "./PlatformMovement";

export class PlatformInput {
  static addKeyboardListeners() {
    window.addEventListener("keydown", this.handleKey.bind(this, true));
    window.addEventListener("keyup", this.handleKey.bind(this, false));
  }

  private static handleKey(isKeyDown: boolean, event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      PlatformMovement.setMovingLeft(isKeyDown);
    } else if (event.key === "ArrowRight") {
      PlatformMovement.setMovingRight(isKeyDown);
    }
  }
}
