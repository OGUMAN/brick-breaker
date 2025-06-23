export interface IBonus {
  name: BonusName;
  icon: string;
  color: string;
  effect: () => void;
}

export enum BonusName {
  ADD_LIFE = "add_life",
  ADD_BALL = "add_ball",
}
