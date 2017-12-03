import { Component, OnInit } from '@angular/core';
import {Annonce} from "../models/annonce";
import {AnnoncesService} from "../annonces.service";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  public annonces: Annonce[];
  public selectedAnnonce;

  constructor(private annonceService: AnnoncesService) {
  }

  ngOnInit() {
    this.annonces = this.annonceService.getAnnonces();
  }

}
