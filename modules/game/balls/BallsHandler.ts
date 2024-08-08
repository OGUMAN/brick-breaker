import App from "../app/App";
import { Ball } from "./ball/Ball";

export default class BallsHandler {
  public static ballsList: Ball[] = [];

  public static addBall() {
    const newBall = new Ball();
    this.ballsList.push(newBall);
    App.app.stage.addChild(newBall);
  }

  public static checkCollision() {
    const len = this.ballsList.length;

    for (let i = 0; i < len; i++) {
      const ball = this.ballsList[i];
      ball.updatePosition();
      ball.checkCanvasCollision(App.app.canvas);
    }
  }
}
