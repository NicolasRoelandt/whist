import {Component, OnInit} from '@angular/core';
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
  public total: number[];

  constructor(private joueursService:JoueursService) {
  }

  ngOnInit() {
    this.joueurs = this.joueursService.getJoueurs();
    this.total = this.zeroArray();
  }

  public addDonne(donne:Donne){
    this.donnes.push(donne);
    this.updateTotal();
  }

  private zeroArray(): number[] {
    return new Array(this.joueurs.length).fill(0);
  }

  private updateTotal() {
    this.total = this.donnes.reduce((sum, donne) => this.sumArrays(sum, donne.score), this.zeroArray())
  }

  private sumArrays(arr1: number[], arr2: number[]): number[] {
    return arr1.map((val, i) => val + arr2[i]);
  }

  public deleteDonne(i: number) {
    this.donnes.splice(i, 1);
    this.updateTotal();
  }
}
