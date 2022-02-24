import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'Search'
})
export class SearchPipe implements PipeTransform {
    transform(items: Array<any>, nameSearch: string, citySearch: string, countrySearch: string, priceSearch: number){
        if (items && items.length){
            return items.filter(item =>{
                if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                    return false;
                }
                if (citySearch && item.city.toLowerCase().indexOf(citySearch.toLowerCase()) === -1){
                    return false;
                }
                if (countrySearch && item.country.toLowerCase().indexOf(countrySearch.toLowerCase()) === -1){
                    return false;
                }
                if (priceSearch && item.price.toLowerCase().indexOf(priceSearch) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}