import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../endpoints";

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) {}

  getChampions() {
    return this.http.get(Endpoints.championsApi());
  }

  createNewChampion(champion: any) {
    return this.http.post(Endpoints.championsApi(), champion);
  }

  getChampionProfile(championName: string) {
    return this.http.get(
      'https://www.leagueoflegends.com/page-data/pt-br/champions/aatrox/page-data.json',
      );
    //return this.http.get(Endpoints.championProfileApi(championName));
  }
}
