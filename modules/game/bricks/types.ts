import type { BonusName } from "../bonuses/utils/types";

export interface IBrick {
  cells: IBrickCoordinates[];
  color: string;
  id: number;
  break: boolean;
  bonus?: BonusName;
}

interface IBrickCoordinates {
  x: number;
  y: number;
}
