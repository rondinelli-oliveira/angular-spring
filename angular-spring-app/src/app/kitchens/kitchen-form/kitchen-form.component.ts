import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { KitchensService } from '../services/kitchens.service';

@Component({
  selector: 'app-kitchen-form',
  templateUrl: './kitchen-form.component.html',
  styleUrls: ['./kitchen-form.component.scss']
})
export class KitchenFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: KitchensService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

}
