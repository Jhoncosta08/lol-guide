import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RunesService} from "../../../services/runes.service";

@Component({
  selector: 'app-add-rune',
  templateUrl: './add-rune.component.html',
  styleUrls: ['../admin-manage-pages.scss']
})
export class AddRuneComponent {
  runeForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private runeService: RunesService) {
    this.buildChampionDefaultForm();
  }

  buildChampionDefaultForm() {
    this.runeForm = this.fb.group({
      runeName: ['', Validators.required],
      runeSlogan: ['', Validators.required],
      runeDescription: ['', Validators.required],
      runeImage: ['', Validators.required],

      mainRune: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        firstRune: new FormGroup({
          id: new FormControl(crypto.randomUUID()),
          firstRuneName: new FormControl('', Validators.required),
          firstRuneDescription: new FormControl('', Validators.required),
          firstRuneImage: new FormControl('', Validators.required),
          firstRuneVideo: new FormControl('', Validators.required),
        }),

        secondRune: new FormGroup({
          id: new FormControl(crypto.randomUUID()),
          secondRuneName: new FormControl('', Validators.required),
          secondRuneDescription: new FormControl('', Validators.required),
          secondRuneImage: new FormControl('', Validators.required),
          secondRuneVideo: new FormControl('', Validators.required),
        }),

        thirdRune: new FormGroup({
          id: new FormControl(crypto.randomUUID()),
          thirdRuneName: new FormControl('', Validators.required),
          thirdRuneDescription: new FormControl('', Validators.required),
          thirdRuneImage: new FormControl('', Validators.required),
          thirdRuneVideo: new FormControl('', Validators.required),
        }),
      }),

      firstSlot: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues(),
      }),

      secondSlot: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues(),
      }),

      thirdSlot: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues()
      }),

    });
  }

  defaultRuneFormGroupValues(): FormGroup {
    return new FormGroup({
      id: new FormControl(crypto.randomUUID()),
      runeName: new FormControl('', Validators.required),
      runeDescription: new FormControl('', Validators.required),
      runeImage: new FormControl('', Validators.required),
    })
  }

  onSubmitRuneForm() {
    this.runeService.createNewRune(this.runeForm.value).then(res => {
      this.updateRuneDocWithId(res.id, res.path);
    }).catch(err => {
      console.error('Error when tried to create a new champion', err);
    })
  }

  updateRuneDocWithId(runeDocId: string, runeDocPath: string) {
    this.runeService.updateRune(runeDocId).then(() => {
      const params = { id: runeDocId };
      void this.route.navigate([runeDocPath], {queryParams: params })
    }).catch(err => {
      console.log('Error when tried to set id', err);
    })
  }

}
