import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { KitchensRoutingModule } from './kitchens-routing.module';
import { KitchensComponent } from './kitchens/kitchens.component';


@NgModule({
  declarations: [
    KitchensComponent
  ],
  imports: [
    CommonModule,
    KitchensRoutingModule,
    MatTableModule
  ]
})
export class KitchensModule { }
