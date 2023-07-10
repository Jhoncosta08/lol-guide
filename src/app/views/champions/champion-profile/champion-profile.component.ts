import {Component, OnInit} from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-profile',
  templateUrl: './champion-profile.component.html',
  styleUrls: ['./champion-profile.component.scss']
})
export class ChampionProfileComponent implements OnInit{
  champTest: any[] = [];
  runeUrl: any;
  constructor(
    private championsService: ChampionsService,
    readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params) return;
      this.getProfileChamp(params['id'])
    });
  }

  getProfileChamp(championParamsId: string) {
    this.championsService.getChampionsList().subscribe({
      next: champion => {
        this.champTest = champion;
      },
      error: err => {
        console.error('Error when tied to get champion', err);
      }
    });
  }

  getById(championParamsId: string) {

  }


}
