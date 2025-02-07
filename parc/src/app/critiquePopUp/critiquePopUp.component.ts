import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CritiqueInterface } from '../Interface/critique.interface';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [CommonModule, MatCardModule,FormsModule,MatDialogModule],
  templateUrl: './critiquePopUp.component.html',
  styleUrl: './critiquePopUp.component.scss'
})
export class AddCritiquePopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<AddCritiquePopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CritiqueInterface
  ) {}

  public cancel(): void {
    this.dialogRef.close();
  }
}
