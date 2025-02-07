import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { MessageInterface } from '../Interface/message.interface';
import { CritiqueInterface } from '../Interface/critique.interface';

@Injectable({
  providedIn: 'root',
})
export class CritiqueService {

  constructor(private dataService: DataService) {

  }

  public getAllCritique(id: number): Observable<CritiqueInterface[]> {
    const url = `http://127.0.0.1:5000/critique/${id}`;
    return this.dataService.getData(url) as Observable<CritiqueInterface[]>;
  }

  public getAverageRating(attractionId: number): Observable<{ average: number }> {
    const url = `http://127.0.0.1:5000/critique/moyenne/${attractionId}`;
    return this.dataService.getData(url) as Observable<{ average: number }>;
  }

  public addCritique(critique: CritiqueInterface): Observable<{ message: string }> {
    const url = 'http://127.0.0.1:5000/critique';
    return this.dataService.postData(url, critique) as Observable<{ message: string }>;
  }
  
  
  
}