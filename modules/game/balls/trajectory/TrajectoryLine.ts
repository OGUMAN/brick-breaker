import TrajectoryRender from "./TrajectoryRender";

export class TrajectoryLine {
  static init() {
    TrajectoryRender.init();
  }

  public static draw(
    mouseX: number,
    mouseY: number,
    startX: number,
    startY: number
  ) {
    TrajectoryRender.draw(mouseX, mouseY, startX, startY);
  }

  public static remove() {
    TrajectoryRender.remove();
  }
}
