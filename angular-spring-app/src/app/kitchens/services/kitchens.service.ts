import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Kitchen } from '../models/kitchen';

@Injectable({
  providedIn: 'root'
})
export class KitchensService {

  private readonly API = '/assets/kitchens.json';

  constructor(private httpClient: HttpClient) { }
    findAll() {
      return this.httpClient.get<Kitchen[]>(this.API)
      .pipe(
        first(),
        tap(kitchens => console.log(kitchens))
        );
    }
}
