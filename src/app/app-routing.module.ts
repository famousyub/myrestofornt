import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { MenuComponent } from './menu/menu.component';
import { MenushoppComponent } from './menushopp/menushopp.component';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestoshoppComponent } from './restoshopp/restoshopp.component';
import { YummyfoodComponent } from './yummyfood/yummyfood.component';

const routes: Routes = [

       {
         path:'',component :  CompanyComponent
       },


       {
        path:'company',component : CompanyComponent 
      },

      {
        path:'savepwa',component : PromptComponentComponent 
      },

      {
        path:'company/:id',component : RestoshoppComponent 
      },

      { path: 'restaurants', component: CompanyComponent },
      { path: 'yummy', component: CompanyComponent },
      { path: 'yummy/:tableId/:restoid/:compId', component: YummyfoodComponent },
  { path: 'restaurants/:id', component: RestaurantsComponent },
  { path: 'menushopp', component: CompanyComponent },
  {path:'menushopp/:tableId/:restoid/:compId'  , component:MenushoppComponent},

  { path: 'restaurants-details/:restoid/:compId', component: RestaurantComponent },

  { path: 'restaurants-details-menu/:tableId/:restoid/:compId', component: MenuComponent }
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
