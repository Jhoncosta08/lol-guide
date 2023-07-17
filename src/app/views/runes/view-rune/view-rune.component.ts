import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-rune',
  templateUrl: './view-rune.component.html',
  styleUrls: ['./view-rune.component.scss']
})
export class ViewRuneComponent implements OnInit {
  runesData: any;
  showSpinner: boolean = true;

  constructor(private runeService: RunesService, readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params) return;
      this.getRune(params['id']);
    });
  }

  getRune(runeParamsId: string): void {
    this.runeService.getRuneById(runeParamsId).then(res => {
      this.runesData = res.data();
      this.showSpinner = false;
      console.log('runes: ', this.runesData);
    }).catch(err => {
      this.showSpinner = false;
      console.error('Error when tried to get champ by id', err);
    });
  }

}
