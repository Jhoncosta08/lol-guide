import { Component } from '@angular/core';
import {ChampionsService} from "../../../services/champions.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-champion',
  templateUrl: './add-champion.component.html',
  styleUrls: ['../admin-manage-pages.scss']
})
export class AddChampionComponent {
  championForm!: FormGroup;
  constructor(
    private championService: ChampionsService,
    private route: Router,
    private fb: FormBuilder,
  ) {
    this.buildChampionDefaultForm();
    this.addChampionSkinsToFormGroup();
  }

  createChampionFormSubmit() {
    this.championService.createNewChampion(this.championForm.value).then(res => {
      this.updateChampionDocWithId(res.id, res.path);
    }).catch(err => {
      console.error('Error when tried to create a new champion', err);
    })
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
      championLanes: new FormGroup({
        top: new FormControl('Topo'),
        mage: new FormControl('Meio'),
        adc: new FormControl('Adc'),
        jungle: new FormControl('Selva'),
        support: new FormControl('Support'),
      }),
      championSkins: new FormArray([]),
      championsSkill: new FormGroup({
        passive: new FormGroup(this.buildDefaultSkillFormValues()),
        q: new FormGroup(this.buildDefaultSkillFormValues()),
        w: new FormGroup(this.buildDefaultSkillFormValues()),
        e: new FormGroup(this.buildDefaultSkillFormValues()),
        r: new FormGroup(this.buildDefaultSkillFormValues()),
      }),
      championDifficulty: ['Dificuldade do campeão:', Validators.required]
    });
  }

  buildDefaultSkillFormValues() {
    return {
      skillName: new FormControl(''),
      skillImage: new FormControl(''),
      skillVideo: new FormControl(''),
      skillDescription: new FormControl(''),
    }
  }


  getChampionSkinsControlsValues(): FormArray {
    return this.championForm.get('championSkins') as FormArray;
  }

  addChampionSkinsToFormGroup(): void {
    this.getChampionSkinsControlsValues().push(
      new FormGroup({
        skinName: new FormControl(''),
        skinUrl: new FormControl('')
      })
    );
  }

  removeChampionSkinsFormGroup(index: number): void {
    let projectArray: FormArray = this.getChampionSkinsControlsValues();
    projectArray.length > 1 ? projectArray.removeAt(index) : projectArray.reset();
  }

}
