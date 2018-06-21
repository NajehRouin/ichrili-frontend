import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMarketPipe'
})

export class SearchMarketPipe implements PipeTransform {
  transform(markets: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return markets.filter(function (market: any) {
        return market.market_name.toLowerCase().indexOf(input) > -1 || market.ville.toLowerCase().indexOf(input) > -1 ;
      });
    }
    return markets;
  }

}
