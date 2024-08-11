export interface IBrick {
  cells: IBrickCoordinates[];
  color: string;
  id: number;
}

interface IBrickCoordinates {
  x: number;
  y: number;
}
