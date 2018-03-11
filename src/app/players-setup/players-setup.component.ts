import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../joueurs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-players-setup',
  templateUrl: './players-setup.component.html',
  styleUrls: ['./players-setup.component.css']
})
export class PlayersSetupComponent implements OnInit {
  public names: string[] = [];
  public mort: boolean;
  public additionalPlayer: string;

  constructor(private joueursService:JoueursService, private router:Router) {
    for(let i = 1; i<= 4; i++){
      this.names.push("Joueur " + i);
    }
  }

  ngOnInit() {
  }

  trackByFn(index: number) {
    return index;
  }

  public click(){
    if (this.additionalPlayer) {
      this.names.push(this.additionalPlayer);
    }
    this.joueursService.setJoueurs(this.names);
    this.router.navigate(['/scoreboard'])
  }

  public more() {
    this.mort = true;
  }


}
