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
  showSpinner: boolean = true;
  championLanes: string[] = [];
  constructor(
    private championsService: ChampionsService,
    readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params) return;
      this.getProfileChamp(params['id']);
    });
  }

  getProfileChamp(championParamsId: string) {
    this.championsService.getChampionById(championParamsId).then(res => {
      this.champData = res.data();
      this.getChampionLanes();
      this.showSpinner = false;
      console.log('champ: ', this.champData);
    }).catch(err => {
      this.showSpinner = false;
      console.error('Error when tried to get champ by id', err);
    });
  }

  getChampionLanes() {
    const champDataLane = this.champData?.championLanes;
    const championLanes = this.championLanes;

    const laneCategories = ['top', 'mage', 'adc', 'jungle', 'support'];
    for (const lane of laneCategories) {
      if (champDataLane[lane] && !championLanes.includes(champDataLane[lane])) {
        championLanes.push(champDataLane[lane]);
      }
    }
  }

  checkIconLane(lane: string): string {
    let iconLane: string = 'assets/icons/lane-icons';
    switch (lane) {
      case "Topo":
        iconLane = `${iconLane}/top.png`;
        break;
      case "Meio":
        iconLane = `${iconLane}/mid.png`;
        break;
      case "Adc":
        iconLane = `${iconLane}/bot.png`;
        break;
      case "Selva":
        iconLane = `${iconLane}/jungle.png`;
        break;
      case "Support":
        iconLane = `${iconLane}/support.png`;
        break;
    }
    return iconLane;
  }


}
