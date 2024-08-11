import LivesHandler from "../../lifes/LifesHandler";
import { BonusName, type IBonus } from "./types";
import heart from "./mdi--heart-plus.png";

export const bonuses: IBonus[] = [
  {
    name: BonusName.ExtraLife,
    icon: heart,
    color: "#5F6F65",
    effect: () => {
      LivesHandler.addLife();
    },
  },
];
