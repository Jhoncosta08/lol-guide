import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-champion-skills',
  templateUrl: './champion-skills.component.html',
  styleUrls: ['./champion-skills.component.scss']
})
export class ChampionSkillsComponent implements OnInit {
  @Input({required: true}) championSkills: any;
  activeSkill: string = 'passive';

  ngOnInit(): void {
    console.log('skills: ', this.championSkills);
  }

  changeActiveSkill(skill: 'passive' | 'q' | 'w' | 'e' | 'r') {
    switch (skill) {
      case "passive":
        this.activeSkill = 'passive';
        break;
      case "q":
        this.activeSkill = 'q';
        break;
      case "w":
        this.activeSkill = 'w';
        break;
      case "e":
        this.activeSkill = 'e';
        break;
      case "r":
        this.activeSkill = 'r';
        break;
    }
  }


}
