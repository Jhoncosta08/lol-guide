import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {
  runeList: any[] = [];
  showSpinner: boolean = true;

  constructor(private runeService: RunesService, private route: Router) {}

  ngOnInit(): void {
    this.getRuneList();
  }

  getRuneList() {
    this.runeService.getRunesList().subscribe({
      next: runeList => {
        this.runeList = runeList;
        this.showSpinner = false;
        console.log('runes: ', runeList);
      },
      error: err => {
        this.showSpinner = false;
        console.error('Error when tried to get champions list', err);
      }
    })
  }

  redirectToRunePage(runeId: string) {
    void this.route.navigate([`runes/${runeId}`]);
  }
}
