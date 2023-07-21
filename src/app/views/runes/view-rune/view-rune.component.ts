import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-rune',
  templateUrl: './view-rune.component.html',
  styleUrls: ['./view-rune.component.scss']
})
export class ViewRuneComponent implements OnInit {
  rune: any;
  showSpinner: boolean = true;
  activeRune: string = 'main-one';
  runeDiretory: string = '';

  constructor(private runeService: RunesService, readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params) return;
      this.getRune(params['id']);
    });
  }

  getRune(runeParamsId: string): void {
    this.runeService.getRuneById(runeParamsId).then(res => {
      this.rune = res.data();
      this.getRuneDiretory();
      this.showSpinner = false;
      console.log('rune: ', this.rune);
    }).catch(err => {
      this.showSpinner = false;
      console.error('Error when tried to get champ by id', err);
    });
  }

  setRuneColor(runeName: string): string {
    let runeColor: string = '';
    switch (runeName) {
      case 'feitiçaria':
        runeColor = '#9faafc';
        break;
      case 'precisão':
        runeColor = '#c8aa6e';
        break;
      case 'inspiração':
        runeColor = '#49aab9';
        break;
      case 'determinação':
        runeColor = '#a1d586';
        break;
      case 'dominação':
        runeColor = '#d44242';
        break;
    }
    return runeColor;
  }

  changeActiveMainRune(mainRune: 'main-one' | 'main-two' | 'main-three'): void {
    switch (mainRune) {
      case "main-one":
        this.activeRune = 'main-one';
        break;
      case "main-two":
        this.activeRune = 'main-two';
        break;
      case "main-three":
        this.activeRune = 'main-three';
        break;
    }
  }

  getRuneDiretory(): void {
    const mainRunePath = this.rune.runeName;
    const mainRunesVideoPath = 'assets/videos/runes'
    if(mainRunePath) {
      switch (mainRunePath) {
        case 'Feitiçaria':
          this.runeDiretory = `${mainRunesVideoPath}/spell`
          break;
        case 'Precisão':
          this.runeDiretory = `${mainRunesVideoPath}/precision`
          break;
        case 'Inspiração':
          this.runeDiretory = `${mainRunesVideoPath}/inspiration`
          break;
        case 'Determinação':
          this.runeDiretory = `${mainRunesVideoPath}/determination`
          break;
        case 'Dominação':
          this.runeDiretory = `${mainRunesVideoPath}/domination`
          break;
      }
    }
  }

}
