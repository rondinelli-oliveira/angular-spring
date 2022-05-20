import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Kitchen } from '../models/kitchen';

@Injectable({
  providedIn: 'root'
})
export class KitchensService {

  constructor(private httpClient: HttpClient) { }
    findAll(): Kitchen[] {
      return [
        {_id: "1", name: "Brasileira", category: "category", symbol: "Brasileira"}
      ];
    }
}
