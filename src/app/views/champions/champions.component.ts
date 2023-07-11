import {Component, OnInit} from '@angular/core';
import {ChampionsService} from "../../services/champions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  championsList: any[] = [];
  constructor(private championsService: ChampionsService, private route: Router) {}

  ngOnInit(): void {
    this.getChampionsList();
  }

  getChampionsList() {
    this.championsService.getChampionsList().subscribe({
      next: championsList => {
        this.championsList = championsList;
        console.log('champ: ', championsList);
      },
      error: err => {
        console.error('Error when tried to get champions list', err);
      }
    })
  }

  redirectToChampPage(championId: string) {
    void this.route.navigate([`champions/${championId}`], )
  }
}
