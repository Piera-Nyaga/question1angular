import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  
transform(items: any[]): any[] {
   return items.sort((a, b) => {
    let first: string = a.arr_name.toLowerCase();
    let second: string = b.arr_name.toLowerCase();
    return first < second ? -1 : (first > second ? 1 : 0);});
   }

// transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

}
