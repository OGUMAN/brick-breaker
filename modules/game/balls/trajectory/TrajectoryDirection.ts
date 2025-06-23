import TrajectoryRender from "./TrajectoryRender";

export class TrajectoryDirection {
  public static reverseVerticalDirection() {
    TrajectoryRender.direction = -TrajectoryRender.direction;
    this.normalizeDirection();
  }

  public static reverseHorizontalDirection() {
    TrajectoryRender.direction = Math.PI - TrajectoryRender.direction;
    this.normalizeDirection();
  }

  private static normalizeDirection() {
    if (TrajectoryRender.direction < 0) {
      TrajectoryRender.direction += 2 * Math.PI;
    } else if (TrajectoryRender.direction >= 2 * Math.PI) {
      TrajectoryRender.direction -= 2 * Math.PI;
    }
  }
}
