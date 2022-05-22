import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Brasileira': return 'done';
      case 'outra': return 'delete';
    }
    return 'done';
  }

}
