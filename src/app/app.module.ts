import { NgModule ,APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CompanyComponent } from './company/company.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TablesComponent } from './tables/tables.component';
import {  MatCardModule} from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { AreaComponent } from './area/area.component';
import { AreadetailsComponent } from './areadetails/areadetails.component';
import {  MatGridListModule} from "@angular/material/grid-list";
import {MatListModule  } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatBadgeModule } from "@angular/material/badge";
import { YummyfoodComponent } from './yummyfood/yummyfood.component';
import { MenushoppComponent } from './menushopp/menushopp.component';
import { SharerestoComponent } from './shareresto/shareresto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { RestoshoppComponent } from './restoshopp/restoshopp.component';
import { TestyComponent } from './testy/testy.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { QRCodeModule } from 'angularx-qrcode';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PwaService } from './services/pwa.service';

import { MatButtonModule } from '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { CustomerService } from './services/customer.service';
const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

//import {  } from "module";
//import {  } from "module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    RestaurantComponent,
    CompanyComponent,
    MenuComponent,
    HeaderComponent,
    SectionComponent,
    RestaurantsComponent,
    TablesComponent,
    AreaComponent,
    AreadetailsComponent,
    YummyfoodComponent,
    MenushoppComponent,
    SharerestoComponent,
    ShoppingcartComponent,
    RestoshoppComponent,
    TestyComponent,
    PromptComponentComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatGridListModule,
    FormsModule,
ReactiveFormsModule,
NgxStarRatingModule,
QRCodeModule,
MatBottomSheetModule,
ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
//ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),

    
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [
  //  {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
