import { Categorie } from './categorie';
import { Market } from './market';

export class Product {
    constructor(public _id: String,
         public designation: String,
        public price: Number, 
        public unite: String,
        public category: Categorie,
        public market: Market,
        
        public photo_url: String) {

    }
}
