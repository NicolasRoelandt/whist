import { Component, OnInit } from '@angular/core';
import {JoueursService} from "../joueurs.service";
import {Joueur} from "../models/joueur";
import {Donne} from "../models/donne";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  public joueurs : Joueur[];
  public donnes: Donne[] = [];

  constructor(private joueursService:JoueursService) {
  }

  ngOnInit() {
    this.joueurs = this.joueursService.getJoueurs();
    console.log(this.joueurs);
  }

  public addDonne(donne:Donne){
    this.donnes.push(donne);
  }

}
