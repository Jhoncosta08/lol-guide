import {Component, OnInit} from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";

@Component({
  selector: 'app-champion-profile',
  templateUrl: './champion-profile.component.html',
  styleUrls: ['./champion-profile.component.scss']
})
export class ChampionProfileComponent implements OnInit{
  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.getProfileChamp();
  }

  getProfileChamp() {
    this.championsService.getChampionsList().subscribe({
      next: champion => {
        console.log('champion: ', champion);
      },
      error: err => {
        console.error('Error when tied to get champion', err);
      }
    });
  }

}
