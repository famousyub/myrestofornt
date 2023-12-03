import { Rating } from "../rating";
import { Ingredient } from "./ingredient";

export class Recipe {

    // id?:number ;
    // description?: string;
    // name?:string;
    // imagePath?:string;
    // qunatitymax?:number;

    // shown?:boolean;
    // price?:number;
    // level?:number;
    // ingredients?:Ingredient[]=[];

    id:number ;
    description: string;
    name:string;
    imagePath:string;
    qunatitymax:number;

    shown:boolean;
    price:number;
    level:number;
    ingredients:Ingredient[]=[];
    rate?:Rating;



   
   
    constructor( 
        id:number ,
        description: string,
        name:string,
        imagePath:string,
        qunatitymax:number,
    
        shown:boolean,
        price:number,
        level:number,
        ingredients:Ingredient[],

         
     )
     { 
        this.id=id ;
        this.description=description;
        this.name=name;
        this.imagePath=imagePath;
        this.qunatitymax=qunatitymax;
        this.shown =shown;
        this.price=price;
        this.level=level;
        
        this.ingredients =[];

     }
}
