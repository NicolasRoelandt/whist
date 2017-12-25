import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../joueurs.service";
import {Joueur} from "../models/joueur";
import {Donne} from "../models/donne";
import {Score} from "../models/score";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  public joueurs : Joueur[];
  public donnes: Donne[] = [];
  public total: Score;

  constructor(private joueursService:JoueursService) {
    this.total = new Score(new Map<Joueur, number>());
  }

  ngOnInit() {
    this.joueurs = this.joueursService.getJoueurs();
    this.total = this.defaultScore();
  }

  public addDonne(donne:Donne){
    this.donnes.push(donne);
    this.updateTotal();
  }

  private updateTotal() {
    this.total = this.donnes.reduce(
      (sum, donne) => sum.add(donne.score), this.defaultScore());
  }

  private defaultScore(): Score {
    let map = new Map<Joueur, number>();
    this.joueurs.forEach(joueur => map.set(joueur, 0));
    return new Score(map);
  };

}
