import {Component, Input, OnInit} from '@angular/core';
import {RunesService} from "../../../../services/runes.service";

@Component({
  selector: 'app-champion-runes',
  templateUrl: './champion-runes.component.html',
  styleUrls: ['./champion-runes.component.scss']
})
export class ChampionRunesComponent implements OnInit {
  @Input({required: true}) championRunes: any;
  runeList: any;

  constructor(private runeService: RunesService) {
  }

  ngOnInit():void {
    this.getAndSetChampionRunes();
  }


  getAndSetChampionRunes(): void {
    this.runeService.getRunesList().subscribe(runes => {
      this.filterRunes(runes);
    });
  }

  filterRunes(runes: any): void {
    console.log('champion Runes: ', this.championRunes);
    console.log('Rune list: ', runes);
    this.runeList = runes;
  }

}
