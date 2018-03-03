export class Contract {
  name: string;
  score: number;
}

export class Annonce {
  name: string;
  double: Boolean;
  won: Contract[];
  lost: Contract[];
}
