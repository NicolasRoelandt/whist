import { Component, OnInit } from '@angular/core';
import {JoueursService} from "../joueurs.service";
import {Joueur} from "../models/joueur";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  public joueurs : Joueur[];

  constructor(private joueursService:JoueursService) {
  }

  ngOnInit() {
    this.joueurs = this.joueursService.getJoueurs();
    console.log(this.joueurs);
  }

}
