import Game from "../app/Game";
import BallsHandler from "../balls/BallsHandler";
import TickerHandler from "../ticker/TickerHandler";
import LifesBar from "./bar/LifesBar";

export default class LifesHandler {
  private static readonly DEFAULT_LIVES = 3;
  public static lifes: number = LifesHandler.DEFAULT_LIVES;

  public static reset() {
    LifesHandler.lifes = LifesHandler.DEFAULT_LIVES;
    LifesBar.update();
  }

  public static addLife() {
    LifesHandler.lifes++;
    LifesBar.update();
  }

  public static removeLife() {
    LifesHandler.lifes--;
    LifesBar.update();
    BallsHandler.removeBalls();
    BallsHandler.addBall();
    BallsHandler.ballsList[0].playRespawnAnimation();

    if (LifesHandler.lifes === 0) {
      Game.handleLose();
    }
  }
}
