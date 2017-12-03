import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Annonce} from "../models/annonce";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public annonces: Annonce[];

  constructor(private http:Http) {
  }

  ngOnInit() {
    this.http.get('assets/annonces.json')
      .subscribe(res => this.annonces = res.json());
  }


}
