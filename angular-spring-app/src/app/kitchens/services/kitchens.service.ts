import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Kitchen } from '../models/kitchen';

@Injectable({
  providedIn: 'root'
})
export class KitchensService {

  private readonly API = 'api/kitchens';

  constructor(private httpClient: HttpClient) { }

    findAll() {
      return this.httpClient.get<Kitchen[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(kitchens => console.log(kitchens))
        );
    }

    save(record: Kitchen) {
      console.log(record)
        return this.httpClient.post<Kitchen>(this.API, record).pipe(first());
      }
}
