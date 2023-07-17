import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData, doc, getDoc, setDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RunesService {
  constructor(private fireStorage: Firestore) { }

  getRunesList() {
    const runeList = collection(this.fireStorage, `runes`);
    return collectionData(runeList);
  }

  getRuneById(runeId: string) {
    const docRef = doc(this.fireStorage, "runes", runeId);
    return getDoc(docRef);

  }

  createNewRune(rune: any) {
    const runeCollection = collection(this.fireStorage, `runes`);
    return addDoc(runeCollection, rune);
  }

  updateRune(runeDocId: string) {
    const docRef = doc(this.fireStorage, "runes", runeDocId);
    return setDoc(docRef, { id: runeDocId }, { merge: true });
  }

}
