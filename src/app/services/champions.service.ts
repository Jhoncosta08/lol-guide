import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData, doc, getDoc, setDoc, updateDoc} from "@angular/fire/firestore";
import {ChampionInterface} from "../interfaces/champion.interface";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private fireStorage: Firestore, private route: Router,) {
  }

  getChampionsList() {
    const championList = collection(this.fireStorage, `champions`, );
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

  updateChampion(championDocId: string) {
    const docRef = doc(this.fireStorage, "champions", championDocId);
    return setDoc(docRef, { id: championDocId }, { merge: true });
  }

  addRuneToChampion(championId: string, runes: any) {
    const docRef = doc(this.fireStorage, "champions", championId);
    let hasRuneField = null;
    getDoc(docRef).then(res => {
      hasRuneField = res.data()!['rune'];
      if(hasRuneField) {
        hasRuneField.push(runes.rune[0]);
        updateDoc(docRef, 'rune', hasRuneField).then(() => {
          this.redirectToChampionPage(championId);
        });
      }else {
        setDoc(docRef, runes, { merge: true }).then(() => {
          this.redirectToChampionPage(championId);
        });
      }
    });
  }

  redirectToChampionPage(championId: string) {
    const params = { id: championId };
    void this.route.navigate([`/champions/${ championId }`], {queryParams: params });
  }

}
