import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-champion-skins',
  templateUrl: './champion-skins.component.html',
  styleUrls: ['./champion-skins.component.scss']
})
export class ChampionSkinsComponent implements OnInit {
  @Input({required: true}) championSkins: any;
  @Input({required: true}) championName: any;
  activeSkinUrl: string = '';
  activeSkinName: string = '';

  ngOnInit(): void {
    this.activeSkinUrl = this.championSkins[0].skinUrl;
    this.activeSkinName = this.championSkins[0].skinName;
  }


  changeActiveSkin(skinName: string, skinUrl: string): void {
    this.activeSkinUrl = skinUrl;
    this.activeSkinName = skinName;
  }






}
