import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-rune',
  templateUrl: './add-rune.component.html',
  styleUrls: ['../admin-manage-pages.scss']
})
export class AddRuneComponent {
  runeForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) {

  }

  buildChampionDefaultForm() {
    this.runeForm = this.fb.group({
      runeName: ['', Validators.required],
      runeSlogan: ['', Validators.required],
      runeDescription: ['', Validators.required],
      runeImage: ['', Validators.required],

      mainRune: new FormGroup({
        firstRune: new FormGroup({
          firstRuneName: new FormControl(['', Validators.required]),
          firstRuneDescription: new FormControl(['', Validators.required]),
          firstRuneImage: new FormControl(['', Validators.required]),
          firstRuneVideo: new FormControl(['', Validators.required]),
        }),

        secondRune: new FormGroup({
          secondRuneName: new FormControl(['', Validators.required]),
          secondRuneDescription: new FormControl(['', Validators.required]),
          secondRuneImage: new FormControl(['', Validators.required]),
          secondRuneVideo: new FormControl(['', Validators.required]),
        }),

        thirdRune: new FormGroup({
          thirdRuneName: new FormControl(['', Validators.required]),
          thirdRuneDescription: new FormControl(['', Validators.required]),
          thirdRuneImage: new FormControl(['', Validators.required]),
          thirdRuneVideo: new FormControl(['', Validators.required]),
        }),
      }),

      runeOne: new FormGroup({
        runeOneName: new FormControl(['', Validators.required]),
        runeOneDescription: new FormControl(['', Validators.required]),
        runeOneImage: new FormControl(['', Validators.required]),
      }),

      runeTwo: new FormGroup({
        runeTwoName: new FormControl(['', Validators.required]),
        runeTwoDescription: new FormControl(['', Validators.required]),
        runeTwoImage: new FormControl(['', Validators.required]),
      }),

      runeThree: new FormGroup({
        runeThreeName: new FormControl(['', Validators.required]),
        runeThreeDescription: new FormControl(['', Validators.required]),
        runeThreeImage: new FormControl(['', Validators.required]),
      }),



    });
  }

}
