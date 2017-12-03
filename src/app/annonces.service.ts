import {Injectable } from '@angular/core';
import {Annonce} from "./models/annonce";
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AnnoncesService {
  private annonces : Observable<Annonce[]>;

  constructor(private http:Http) {
    this.annonces = this.http.get('assets/annonces.json')
      .map(res => <Annonce[]> res.json());
  }

  public getAnnonces(){
    return this.annonces;
  }

}
