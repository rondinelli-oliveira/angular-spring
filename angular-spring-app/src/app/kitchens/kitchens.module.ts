import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { KitchensRoutingModule } from './kitchens-routing.module';
import { KitchensComponent } from './kitchens/kitchens.component';


@NgModule({
  declarations: [
    KitchensComponent
  ],
  imports: [
    CommonModule,
    KitchensRoutingModule,
    AppMaterialModule
  ]
})
export class KitchensModule { }
