export class Tableresto {

    id:number;
    tablename: string ;
    tablenumber: number;
    tableclass: string;
    tableavaible: string;


    constructor( 

        id:number,
        tablename: string ,
        tablenumber: number,
        tableclass: string,
        tableavaible: string,
    ){
        this.id= id;
        this.tablename=tablename;
        this.tablenumber =tablenumber;
        this.tableavaible =tableavaible;
        this.tableclass=tableclass;
    }
}
