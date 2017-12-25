import {Component, Host, OnInit} from '@angular/core';
import {Annonce} from "../models/annonce";
import {AnnoncesService} from "../annonces.service";
import {JoueursService} from "../joueurs.service";
import {ScoreBoardComponent} from "../score-board/score-board.component";
import {Donne} from "../models/donne";
import {Joueur} from "../models/joueur";
import {Score} from "../models/score";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  public annonces: Annonce[];
  public selectedAnnonce: Annonce;
  public joueurs: Joueur[];
  public winner: Joueur;

  constructor(private annonceService: AnnoncesService,
              private joueursService:JoueursService,
              @Host()  private scoreBoardComponent: ScoreBoardComponent) {
  }

  ngOnInit() {
    this.annonces = this.annonceService.getAnnonces();
    this.joueurs = this.joueursService.getJoueurs();
  }

  public add(){
    let points = new Map<Joueur, number>();
    points.set(this.winner, this.selectedAnnonce.points);
    let remaining = -this.selectedAnnonce.points/3;

    this.joueurs.filter(joueur => joueur != this.winner)
      .forEach(joueur => points.set(joueur, remaining));


    this.scoreBoardComponent.addDonne(new Donne(this.selectedAnnonce, new Score(points)));
  }

}
