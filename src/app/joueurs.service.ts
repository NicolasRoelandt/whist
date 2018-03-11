import {Injectable} from '@angular/core';
import {Joueur} from './models/joueur';

@Injectable()
export class JoueursService {
  private joueurs: Joueur[];

  constructor() {
    this.joueurs = [new Joueur("Pierre"), new Joueur("Paul"), new Joueur("Jacques"), new Joueur("Matthieu"), new Joueur("Mort")];
  }

  public setJoueurs(names: string[]){
    this.joueurs = names.map(name => new Joueur(name));
  }

  public getJoueurs() {
    return this.joueurs;
  }

}
