import BallsHandler from "../balls/BallsHandler";
import TickerHandler from "../ticker/TickerHandler";
import LivesBar from "./bar/LifesBar";

export default class LivesHandler {
  public static lifes: number = 3;

  public static addLife() {
    this.lifes++;
    LivesBar.update();
  }

  public static removeLife() {
    this.lifes--;
    LivesBar.update();
    BallsHandler.removeBalls();
    BallsHandler.addBall();
    BallsHandler.ballsList[0].playRespawnAnimation();

    if (this.lifes === 0) {
      TickerHandler.stop();
    }
  }
}
