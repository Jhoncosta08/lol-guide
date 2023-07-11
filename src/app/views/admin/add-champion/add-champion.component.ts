import { Component } from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-champion',
  templateUrl: './add-champion.component.html',
  styleUrls: ['./add-champion.component.scss']
})
export class AddChampionComponent {
  championForm!: FormGroup;
  constructor(
    private championService: ChampionsService,
    private route: Router,
    private fb: FormBuilder,
  ) {
    this.buildChampionDefaultForm();
  }

  createChampionFormSubmit() {
    console.log('this.championForm', this.championForm);
    // this.championService.createNewChampion(championForm.value).then(res => {
    //   this.updateChampionDocWithId(res.id, res.path);
    // }).catch(err => {
    //   console.error('Error when tried to create a new champion', err);
    // })

  }

  updateChampionDocWithId(championDocId: string, championDocPath: string) {
    this.championService.updateChampion(championDocId).then(() => {
      const params = { id: championDocId };
      void this.route.navigate([championDocPath], {queryParams: params })
    }).catch(err => {
      console.log('Error when tried to set id', err);
    })
  }

  buildChampionDefaultForm() {
    this.championForm = this.fb.group({
      championName: ['', Validators.required],
      championLore: ['', Validators.required],
      championIcon: ['', Validators.required],
      championSplash: ['', Validators.required],
      championTitle: ['', Validators.required],
      championSkins: new FormArray([])
    });
  }

}
