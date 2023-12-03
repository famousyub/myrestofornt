import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  areas:any;
  displayedColumns: string[] = ['id', 'name', 'areapic','tables'];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {

    this.getAllAreas();
  }

  getAllAreas(){
      this.customerService.getAllArea().subscribe(res=>{
          console.table(res);
          this.areas =res;
      })
  }

}

/*




<mat-grid-list cols="4" rowHeight="2:1">
    <mat-grid-tile>Area</mat-grid-tile>
    <mat-grid-tile>
       
          

    </mat-grid-tile>
   
  </mat-grid-list>

  <table mat-table [dataSource]="areas" class="mat-elevation-z8">

    <!--- Note that these columns can be defined in any order.
          The actual rendered columns are set as a property on the row definition" -->
  
    <!-- Position Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element">
     
        {{element.id}}
     
   
      
      </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="areapic">
      <th mat-header-cell *matHeaderCellDef> areaspic </th>
      <td mat-cell *matCellDef="let element"> 
        <img [src]="'data:image/jpg;base64,'+element.areapic" height="45" width="45"/> 
        <img mat-card-sm-image [src]="'data:image/jpg;base64,'+element.areapic" >  
      </td>
    </ng-container>

    <ng-container matColumnDef="tables">
      <th mat-header-cell *matHeaderCellDef> tables </th>
      <td mat-cell *matCellDef="let element"> 


        <mat-card class="example-card">
            <mat-card-title-group>
              <mat-card-title>atabels</mat-card-title>
              <mat-card-subtitle>tables</mat-card-subtitle>
            
            </mat-card-title-group>
            <mat-card-content>
                <mat-list>
                    <mat-list-item *ngFor=" let t of element.atable">
                      <mat-icon matListIcon></mat-icon>
                      <h3 matLine> id   {{t.id}} </h3>
                      <p matLine>
                        <span> refernce  {{t.ref}} </span>
                        <span class="demo-2"> --   x {{t.loc_x}}   y --  {{t.loc_y}}  </span>
                      </p>
                    </mat-list-item>
                  </mat-list>
          
            </mat-card-content>
          </mat-card>

        
        
       
      </td>
    </ng-container>
  
    <!-- Symbol Column -->
   
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>






*/