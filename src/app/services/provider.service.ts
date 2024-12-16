import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  /* Inyecte de dependencia AngularFire */
  firestoreService = inject(Firestore);

  constructor() { }

  /* Método para crear un documento en la colección */
  createDocument(collectionName: string, data: any): Promise<any> {
    const colRef = collection(this.firestoreService, collectionName);
    return addDoc(colRef, data);
  }

  readCollection(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestoreService, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  
}