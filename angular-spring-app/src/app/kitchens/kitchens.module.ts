import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { KitchensRoutingModule } from './kitchens-routing.module';
import { KitchensComponent } from './kitchens/kitchens.component';
import { KitchenFormComponent } from './kitchen-form/kitchen-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KitchensComponent,
    KitchenFormComponent
  ],
  imports: [
    CommonModule,
    KitchensRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class KitchensModule { }
