import { Component } from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-champion',
  templateUrl: './add-champion.component.html',
  styleUrls: ['./add-champion.component.scss']
})
export class AddChampionComponent {
  constructor(private championService: ChampionsService, private route: Router) {}

  createChampionFormSubmit(championForm: NgForm) {
    this.championService.createNewChampion(championForm.value).then(res => {
      const params = { id: res.id };
      void this.route.navigate([res.path], {queryParams: params })
    }).catch(err => {
      console.error('Error when tried to create a new champion', err);
    })
  }
}
