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

  public getAllCritique() : Observable<CritiqueInterface[]> {
    const url = "http://127.0.0.1:5000/critique"
    const data = this.dataService.getData(url);
    return data as Observable<CritiqueInterface[]>;
  }
}