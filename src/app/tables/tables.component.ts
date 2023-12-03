import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


  mestables =   [{
    idtables: 1 ,
    menuId:1

  },
  {
    idtables: 2,
    menuId:1

  }
  ,
  {
    idtables: 3 ,
    menuId:1

  },
  {
  idtables: 4 ,
  menuId:1

},
{
  idtables: 5 ,
  menuId:1

}
,
{
  idtables: 6 ,
  menuId:1

},
{
  idtables: 7 ,
  menuId:1

},
{
  idtables: 8 ,
  menuId:1

}
,
{
  idtables: 9 ,
  menuId:1

},
{
  idtables: 10 ,
  menuId:1

},
{
  idtables: 11 ,
  menuId:1

}
,
{
  idtables: 12 ,
  menuId:1

}
     

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
