import {Injectable} from '@angular/core';
import {Joueur} from './models/joueur';

@Injectable()
export class JoueursService {
  private joueurs: Joueur[];

  constructor() {
    this.joueurs = [new Joueur("a"), new Joueur("b"), new Joueur("c"), new Joueur("d")];
  }

  public setJoueurs(names: string[]){
    this.joueurs = names.map(name => new Joueur(name));
  }

  public getJoueurs() {
    return this.joueurs;
  }

}
