import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategoriePipe'
})
export class searchCategoriePipe implements PipeTransform {
  transform(categories: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return categories.filter(function (categorie: any) {
        return categorie.categorieP.toLowerCase().indexOf(input) > -1  ;
      });
    }
    return categories;
  }

}
