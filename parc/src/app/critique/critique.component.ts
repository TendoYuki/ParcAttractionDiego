import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './critique.component.html',
  styleUrl: './critique.component.scss'
})
export class CritiqueComponent {

  constructor(public attractionService: AttractionService, public critiqueService: CritiqueService,private route: ActivatedRoute)
  {}
  public averageRating: number = 0;

  ngOnInit() {
    const routeId = +this.route.snapshot.params['id'];
    
    this.attraction = this.attractionService.getAttraction(routeId);
    this.critiques = this.critiqueService.getAllCritique(routeId);

    this.critiqueService.getAverageRating(routeId).subscribe(response => {
      this.averageRating = response.average;
    });
  }
  public routeId!: number;
  public attraction!: Observable<AttractionInterface>;
  public critiques!: Observable<CritiqueInterface[]>;
}
