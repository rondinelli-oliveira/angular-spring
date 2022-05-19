import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchensRoutingModule } from './kitchens-routing.module';
import { KitchensComponent } from './kitchens/kitchens.component';


@NgModule({
  declarations: [
    KitchensComponent
  ],
  imports: [
    CommonModule,
    KitchensRoutingModule
  ]
})
export class KitchensModule { }
