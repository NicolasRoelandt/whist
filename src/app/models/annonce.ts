export class Contract {
  name: string;
  score: number;
}

export class Annonce {
  name: string;
  type: Type;
  won: Contract[];
  lost: Contract[];
}

export enum Type {
  SOLO,
  DOUBLE
}
