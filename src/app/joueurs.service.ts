import {Injectable} from '@angular/core';
import {Joueur} from './models/joueur';

@Injectable()
export class JoueursService {
  private joueurs: Joueur[];

  constructor() {
  }

  public setJoueurs(names: string[]){
    this.joueurs = names.map(name => new Joueur(name));
  }

  public getJoueurs() {
    return this.joueurs;
  }

}
