import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Combattant } from '../models/combattant.model';

@Injectable({
  providedIn: 'root'
})
export class CombattantService {
  private dbPath = '/combattants';
  combattantsRef: AngularFirestoreCollection<Combattant>

  constructor(
    private db: AngularFirestore
  ) { 
    this.combattantsRef = db.collection(this.dbPath);

  }

  getAllCombattants(): any {
    return this.combattantsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );

  }

  saveNewCombattant(combattant: Combattant): any {
    return new Observable(obs => {
      this.combattantsRef.add({...combattant}).then(() => {
        obs.next();
      })
    })
  }

  getById(id: any): any{
    
    return new Observable(obs => {
      this.combattantsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });

  }
  update(combattant: Combattant): any {
    return new Observable(obs => {
      this.combattantsRef.doc(combattant.id).update(combattant);
      obs.next();
    });
  }

  delete(id:any){
    this.combattantsRef.doc(id).delete();
  }
}
