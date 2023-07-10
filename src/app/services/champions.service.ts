import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(
    private fireStorage: Firestore
  ) {}

  getChampionsList() {
    const championList = collection(this.fireStorage, `champions`);
    return collectionData(championList);
  }

  getChampionData(championName: string) {
    const champion = collection(this.fireStorage, `champions/${championName}`);
    return collectionData(champion);
  }

  createNewChampion(champion: any) {
    const championCollection = collection(this.fireStorage, `champions`);
    return addDoc(championCollection, champion);
  }
}
