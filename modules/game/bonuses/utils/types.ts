export interface IBonus {
  name: string;
  icon: string;
  color: string;
  effect: () => void;
}

export enum BonusName {
  ExtraLife = "ExtraLife",
  SpeedUp = "SpeedUp",
  SlowDown = "SlowDown",
}
