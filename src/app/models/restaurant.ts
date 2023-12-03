import { Recipe } from "./recipe";
import { Tableresto } from "./tableresto";

export class Restaurant {

    id?:number;
    restoname?:string;
    address?:string;
    phonenumber?:string;
    slug?:string;
    photoUrl?:string;
    recipes?:Recipe[]=[];
    tables?:Tableresto[]=[];


}
/*
<app-section></app-section>
<app-home></app-home>
*/