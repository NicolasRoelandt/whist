export class Contract {
  name: string;
  points: number[];
}

export class Annonce {
  name: string;
  won: Contract[];
  lost: Contract[];
}
