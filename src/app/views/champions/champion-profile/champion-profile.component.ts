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
    this.championsService.getChampionProfile('').subscribe(res => {
      console.log('data: ', res);
    });
  }
}
