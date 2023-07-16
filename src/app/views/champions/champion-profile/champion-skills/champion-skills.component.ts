import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-champion-skills',
  templateUrl: './champion-skills.component.html',
  styleUrls: ['./champion-skills.component.scss']
})
export class ChampionSkillsComponent implements OnInit {
  @Input({required: true}) championSkills: any;
  activeSkill: string = 'passive';
  showDefaultImg: boolean = false;

  ngOnInit(): void {
    this.checkVideoUrl(this.championSkills.passive.skillVideo)
  }

  changeActiveSkill(skill: 'passive' | 'q' | 'w' | 'e' | 'r') {
    switch (skill) {
      case "passive":
        this.activeSkill = 'passive';
        this.checkVideoUrl(this.championSkills[skill].skillVideo);
        break;
      case "q":
        this.activeSkill = 'q';
        this.checkVideoUrl(this.championSkills[skill].skillVideo);
        break;
      case "w":
        this.activeSkill = 'w';
        this.checkVideoUrl(this.championSkills[skill].skillVideo);
        break;
      case "e":
        this.activeSkill = 'e';
        this.checkVideoUrl(this.championSkills[skill].skillVideo);
        break;
      case "r":
        this.activeSkill = 'r';
        this.checkVideoUrl(this.championSkills[skill].skillVideo);
        break;
    }
  }

  checkVideoUrl(videoUrl: string) {
    this.showDefaultImg = !videoUrl || videoUrl.includes('jpg') || videoUrl.includes('png');
  }


}
