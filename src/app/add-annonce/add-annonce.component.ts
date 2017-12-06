import { Component, OnInit } from '@angular/core';
import {Annonce} from "../models/annonce";
import {AnnoncesService} from "../annonces.service";
import {JoueursService} from "../joueurs.service";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  public annonces: Annonce[];
  public selectedAnnonce;
  public joueurs;

  constructor(private annonceService: AnnoncesService, private joueursService:JoueursService) {
  }

  ngOnInit() {
    this.annonces = this.annonceService.getAnnonces();
    this.joueurs = this.joueursService.getJoueurs();
  }

  public add(){

  }

}
