import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchenFormComponent } from './kitchen-form/kitchen-form.component';
import { KitchensComponent } from './kitchens/kitchens.component';

const routes: Routes = [
  { path: '', component: KitchensComponent },
  { path: 'new', component: KitchenFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchensRoutingModule { }
