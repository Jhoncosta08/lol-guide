import {Component, OnInit} from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-profile',
  templateUrl: './champion-profile.component.html',
  styleUrls: ['./champion-profile.component.scss']
})
export class ChampionProfileComponent implements OnInit{
  champData: any;
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
    this.championsService.getChampionById(championParamsId).then(res => {
      this.champData = res.data();
      console.log('champ: ', this.champData);
    }).catch(err => {
      console.error('Error when tried to get champ by id', err)
    });
  }


}
