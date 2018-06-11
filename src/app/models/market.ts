export class Market {
    constructor(  _id: string,
   public market_name: string,
   public Adresse: string,
   public ville: string,
   public photo: string,
   public position:IPosition,
    ){}
   
   
}
export class IPosition{
    constructor(
      public  latitude: number,
      public  longitude: number,
    ){}
}



