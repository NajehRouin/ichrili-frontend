import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProductPipe'
})
export class SearchProductPipe implements PipeTransform {
  transform(products: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return products.filter(function (product: any) {
        return product.designation.toLowerCase().indexOf(input) > -1;
      });
    }
    return products;
  }

}
