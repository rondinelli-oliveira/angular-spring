import { Component, OnInit } from '@angular/core';

import { Kitchen } from '../models/kitchen';
import { KitchensService } from '../services/kitchens.service';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.scss']
})
export class KitchensComponent implements OnInit {

  kitchens: Kitchen[] =[];
  displayedColumns = ['_id', 'name', 'category', 'symbol'];

  //kitchensService: KitchensService;

  constructor(private kitchensService: KitchensService) {
    //this.kitchens = [];
    //this.kitchensService = new KitchensService();
    this.kitchens = this.kitchensService.findAll();
  }

  ngOnInit(): void {
  }

}
