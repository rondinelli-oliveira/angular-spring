import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Kitchen } from '../models/kitchen';
import { KitchensService } from '../services/kitchens.service';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.scss']
})
export class KitchensComponent implements OnInit {

  kitchens$: Observable<Kitchen[]>;
  //kitchens: Kitchen[] = [];
  displayedColumns = ['_id', 'name', 'category', 'symbol'];

  //kitchensService: KitchensService;

  constructor(
    private kitchensService: KitchensService,
    public dialog: MatDialog) {
    //this.kitchens = [];
    //this.kitchensService = new KitchensService();
    this.kitchens$ = this.kitchensService.findAll()
    .pipe(
      catchError(error => {
      this.onError('Erro ao carregar as cozinhas!');
      return of([])
      })
    );

    //this.kitchensService.findAll().subscribe(kitchens => this.kitchens = kitchens);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
