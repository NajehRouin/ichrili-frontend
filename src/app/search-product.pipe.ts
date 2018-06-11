import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchProductPipe'
})
export class SearchProductPipe implements PipeTransform {
  transform(products: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return products.filter(function (product: any) {
        return product.designation.toLowerCase().indexOf(input) > -1 ||product.market.toLowerCase().indexOf(input) > -1 || product.categorie.toLowerCase().indexOf(input) > -1 ;
      });
    }
    return products;
  }

}
