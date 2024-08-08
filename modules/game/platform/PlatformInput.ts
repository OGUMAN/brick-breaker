import { PlatformMovement } from "./PlatformMovement";

export class PlatformInput {
  static addKeyboardListeners(movement: PlatformMovement) {
    window.addEventListener("keydown", (event) =>
      this.handleKeyDown(event, movement)
    );
    window.addEventListener("keyup", (event) =>
      this.handleKeyUp(event, movement)
    );
  }

  private static handleKeyDown(
    event: KeyboardEvent,
    movement: PlatformMovement
  ) {
    if (event.key === "ArrowLeft") {
      movement.setMovingLeft(true);
    } else if (event.key === "ArrowRight") {
      movement.setMovingRight(true);
    }
  }

  private static handleKeyUp(event: KeyboardEvent, movement: PlatformMovement) {
    if (event.key === "ArrowLeft") {
      movement.setMovingLeft(false);
    } else if (event.key === "ArrowRight") {
      movement.setMovingRight(false);
    }
  }
}
