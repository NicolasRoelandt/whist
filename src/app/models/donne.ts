import {Annonce} from './annonce';
import {Joueur} from "./joueur";

export class Donne {
  constructor(public annonce: Annonce,
              public scores: Map<Joueur, number>) {
  }
}
