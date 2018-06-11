import { Categorie } from './categorie';
import { Market } from './market';
import {Product} from './product';
export class listaAchat {
    constructor(public _id: String,
         public produit: Product,
        public market: String,
        public qte: Number,
        public prix : Number,
        public totale: Number) {}
}

