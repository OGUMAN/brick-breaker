import LifesHandler from "../../lifes/LifesHandler";
import { BonusName, type IBonus } from "./types";
import heart from "./mdi--heart-plus.png";
import circle from "./mdi--checkbox-blank-circle.svg";
import BallsHandler from "../../balls/BallsHandler";

export const bonuses: IBonus[] = [
  {
    name: BonusName.ADD_LIFE,
    icon: heart,
    color: "#5F6F65",
    effect: () => {
      LifesHandler.addLife();
    },
  },
  {
    name: BonusName.ADD_BALL,
    icon: circle,
    color: "#5F6F65",
    effect: () => {
      BallsHandler.addBall();
    },
  },
];
