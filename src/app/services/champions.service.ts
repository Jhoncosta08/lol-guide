import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../endpoints";

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) {}

  getChampionsList(champion: any) {
    return this.http.post(Endpoints.getChampionsList(), champion);
  }

  getChampionData(championName: string) {
    return this.http.get(Endpoints.getChampionData(championName));
  }
}
