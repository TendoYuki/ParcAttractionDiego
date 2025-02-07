import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCritiquePopUpComponent } from '../critiquePopUp/critiquePopUp.component';

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, MatDialogModule],
  templateUrl: './critique.component.html',
  styleUrl: './critique.component.scss'
})
export class CritiqueComponent {
  public attraction!: Observable<AttractionInterface>;
  public critiques!: Observable<CritiqueInterface[]>;
  public averageRating: number = 0;

  constructor(
    public attractionService: AttractionService,
    public critiqueService: CritiqueService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const routeId = +this.route.snapshot.params['id'];

    this.attraction = this.attractionService.getAttraction(routeId);
    this.critiques = this.critiqueService.getAllCritique(routeId);

    this.critiqueService.getAverageRating(routeId).subscribe(response => {
      this.averageRating = response.average;
    });
  }

  public openAddCritiqueDialog(): void {
    const routeId = +this.route.snapshot.params['id'];
    const dialogRef = this.dialog.open(AddCritiquePopUpComponent, {
      width: '400px',
      data: {
        critique_id: null,
        attraction_id: routeId,
        name: '',
        first_name: '',
        text: '',
        mark: 0,
        isAnonym: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCritique(result);
      }
    });
  }

  private addCritique(newCritique: CritiqueInterface): void {
    this.critiqueService.addCritique(newCritique).subscribe({
      next: () => {
        this.reloadCritiques();
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la critique : ', error);
      }
    });
  }

  private reloadCritiques(): void {
    const routeId = +this.route.snapshot.params['id'];
    this.critiques = this.critiqueService.getAllCritique(routeId);
  }
}
