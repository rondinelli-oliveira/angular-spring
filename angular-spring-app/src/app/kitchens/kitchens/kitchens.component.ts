import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../models/kitchen';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.scss']
})
export class KitchensComponent implements OnInit {

  kitchens: Kitchen[] =[
    {_id: "1", name: "Brasileira", category: "category", symbol: "Brasileira"}
  ];
  displayedColumns = ['_id', 'name', 'category', 'symbol'];

  constructor() {
    //this.kitchens = [];
  }

  ngOnInit(): void {
  }

}
