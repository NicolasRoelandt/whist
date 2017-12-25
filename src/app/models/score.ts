import {Joueur} from './joueur';

export class Score {
  constructor(public points?: Map<Joueur, number>) {
  }

  public add(other: Score): Score {
    let sum = new Map<Joueur, number>();

    this.points.forEach(
      (value, joueur) => sum.set(joueur, other.points.get(joueur) + value));

    return new Score(sum);
  }

  public get(joueur: Joueur): number {
    return this.points.get(joueur);
  }
}

