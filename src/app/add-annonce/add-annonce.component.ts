import {Component, Host, OnInit} from '@angular/core';
import {Annonce, Contract} from "../models/annonce";
import {AnnoncesService} from "../annonces.service";
import {JoueursService} from "../joueurs.service";
import {ScoreBoardComponent} from "../score-board/score-board.component";
import {Donne} from "../models/donne";
import {Joueur} from "../models/joueur";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  public annonces: Annonce[];
  public selectedAnnonce: Annonce;
  public won: Boolean;
  public selectedContract: Contract;

  public joueurs: Joueur[];
  public winner1: Joueur;
  public winner2: Joueur;

  public hasMort: boolean;
  public mort: Joueur;

  constructor(private annonceService: AnnoncesService,
              private joueursService: JoueursService,
              @Host() private scoreBoardComponent: ScoreBoardComponent) {
  }

  ngOnInit() {
    this.annonces = this.annonceService.getAnnonces();
    this.joueurs = this.joueursService.getJoueurs();
    this.hasMort = this.joueurs.length > 4;
  }

  public getContracts(): Contract[] {
    if (this.won == null) {
      return [];
    }
    return this.won ? this.selectedAnnonce.won : this.selectedAnnonce.lost;
  }

  public add() {
    if (!this.selectedAnnonce.double) {
      this.winner2 = null;
    }
    let winningScore = this.selectedContract.score;
    let losingScore = this.selectedAnnonce.double ?
      -this.selectedContract.score : -this.selectedContract.score / 3;

    let points: number[] = [];
    for (let joueur of this.joueurs) {
      if (joueur == this.mort) {
        points.push(0);
      } else if (this.winner1 == joueur || this.winner2 == joueur) {
        points.push(winningScore);
      } else {
        points.push(losingScore);
      }
    }


    this.scoreBoardComponent.addDonne(new Donne(this.selectedAnnonce.name + " " + this.selectedContract.name, points));
  }

}
