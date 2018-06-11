/*export class User {
    _id?: string;
    user_name?: string;
    password?: string;
    avatar_url?: string;
    gender?: string;
    region?: string;
    email? :String;
    numtel? :Number;
}*/

export class User {
    constructor(public _id: string,
         public user_name: string,
        public password: string, 
        public avatar_url:string ,
        public gender: string ,
        public region : string ,
        public email: string ,
        public numtel :Number 
        ) {

    }
}