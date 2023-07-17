import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-rune',
  templateUrl: './add-rune.component.html',
  styleUrls: ['../admin-manage-pages.scss']
})
export class AddRuneComponent {
  runeForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) {
    this.buildChampionDefaultForm();
  }

  buildChampionDefaultForm() {
    this.runeForm = this.fb.group({
      runeName: ['', Validators.required],
      runeSlogan: ['', Validators.required],
      runeDescription: ['', Validators.required],
      runeImage: ['', Validators.required],

      mainRune: new FormGroup({
        firstRune: new FormGroup({
          firstRuneName: new FormControl('', Validators.required),
          firstRuneDescription: new FormControl('', Validators.required),
          firstRuneImage: new FormControl('', Validators.required),
          firstRuneVideo: new FormControl('', Validators.required),
        }),

        secondRune: new FormGroup({
          secondRuneName: new FormControl('', Validators.required),
          secondRuneDescription: new FormControl('', Validators.required),
          secondRuneImage: new FormControl('', Validators.required),
          secondRuneVideo: new FormControl('', Validators.required),
        }),

        thirdRune: new FormGroup({
          thirdRuneName: new FormControl('', Validators.required),
          thirdRuneDescription: new FormControl('', Validators.required),
          thirdRuneImage: new FormControl('', Validators.required),
          thirdRuneVideo: new FormControl('', Validators.required),
        }),
      }),

      firstSlot: new FormGroup({
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues(),
      }),

      secondSlot: new FormGroup({
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues(),
      }),

      thirdSlot: new FormGroup({
        subRuneOne: this.defaultRuneFormGroupValues(),
        subRuneTwo: this.defaultRuneFormGroupValues(),
        subRuneThree: this.defaultRuneFormGroupValues()
      }),

    });
  }

  defaultRuneFormGroupValues(): FormGroup {
    return new FormGroup({
      runeName: new FormControl('', Validators.required),
      runeDescription: new FormControl('', Validators.required),
      runeImage: new FormControl('', Validators.required),
    })
  }

  onSubmitRuneForm() {
    console.log('form: ', this.runeForm.value);
  }

}
