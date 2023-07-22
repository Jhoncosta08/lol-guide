import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RunesService} from "../../../services/runes.service";
import {ChampionsService} from "../../../services/champions.service";

@Component({
  selector: 'app-add-rune-champion',
  templateUrl: './add-rune-champion.component.html',
  styleUrls: ['../admin-manage-pages.scss']
})
export class AddRuneChampionComponent {
  addRuneForm!: FormGroup;
  runeList: any;
  championsList: any;
  mainRuneSelected: any;
  subRuneSelected: any;
  showFirstSlots: boolean = false;
  showSecondsSlots: boolean = false;
  selectedChampion: any;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private runeService: RunesService,
    private championService: ChampionsService
  ) {
    this.getAllRunes();
    this.getAllChampions();
    this.buildDefaultForm();
  }

  onSubmitAddRuneForm() {
    let runes = { rune: [this.addRuneForm.value]};
    this.championService.addRuneToChampion(this.selectedChampion.id, runes);
  }


  buildDefaultForm() {
    this.addRuneForm = this.fb.group({
      runeTitle: new FormControl(''),
      runeDescription: new FormControl(''),
      runeOne: new FormGroup({
        mainRune: new FormControl('Runa principal do campeão:'),
        mainSlot: new FormControl(''),
        slotOne: new FormControl(''),
        slotTwo: new FormControl(''),
        slotThree: new FormControl(''),
      }),
      runeTwo: new FormGroup({
        subRune: new FormControl('Runa secundária do campeão:'),
        slotOne: new FormControl(''),
        slotTwo: new FormControl(''),
      }),
    });
  }

  setMainRune(selectedRune: any) {
    const id = selectedRune.target.value;
    if(id) {
      this.mainRuneSelected = this.runeList.find((rune: any) => rune.mainRune.id === id);
      this.showFirstSlots = true;
    }
  }

  setSubRune(selectedRune: any) {
    const id = selectedRune.target.value;
    if(id) {
      this.subRuneSelected = this.runeList.find((rune: any) => rune.mainRune.id === id);
      this.showSecondsSlots = true;
    }
  }

  getSelectedChampion(champion: any) {
    const id = champion.target.value;
    if(id) {
      this.selectedChampion = this.championsList.find((champion: any) => champion.id === id);
    }
  }

  getAllRunes() {
    this.runeService.getRunesList().subscribe(runes => {
      this.runeList = runes;
    });
  }

  getAllChampions() {
    this.championService.getChampionsList().subscribe(champions => {
      this.championsList = champions;
    });
  }

}
