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
  public winner: Joueur;

  constructor(private annonceService: AnnoncesService,
              private joueursService: JoueursService,
              @Host() private scoreBoardComponent: ScoreBoardComponent) {
  }

  ngOnInit() {
    this.annonces = this.annonceService.getAnnonces();
    this.joueurs = this.joueursService.getJoueurs();
  }

  public getContracts(): Contract[] {
    if (this.won == null) {
      return [];
    }
    return this.won ? this.selectedAnnonce.won : this.selectedAnnonce.lost;
  }


  public add() {
    this.scoreBoardComponent.addDonne(new Donne(this.selectedAnnonce.name + " " + this.selectedContract.name, this.selectedContract.points));
  }

}
