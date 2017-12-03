import {Injectable } from '@angular/core';
import {Annonce} from './models/annonce';
import * as data from 'assets/annonces.json';

@Injectable()
export class AnnoncesService {
  private annonces: Annonce[];

  constructor() {
    this.annonces = <Annonce[]> <any> data;
  }

  public getAnnonces() {
    return this.annonces;
  }

}
