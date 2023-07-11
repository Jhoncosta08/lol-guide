import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData, doc, getDoc} from "@angular/fire/firestore";
import {ChampionInterface} from "../interfaces/champion.interface";

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

  getChampionById(championId: string) {
    const docRef = doc(this.fireStorage, "champions", championId);
    return getDoc(docRef);

  }

  createNewChampion(champion: ChampionInterface) {
    const championCollection = collection(this.fireStorage, `champions`);
    return addDoc(championCollection, champion);
  }
}
