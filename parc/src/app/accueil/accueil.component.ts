import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService, public critiqueService: CritiqueService, public router: Router)
  {
    
  }
  
  public voirCritiques(attractionId: number): void {
    this.router.navigate(['critique', attractionId]);
  }
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
}
