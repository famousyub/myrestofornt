import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restoclient';


  showmaps(){

      window.open("http://localhost:9088/map.html")
  }
}
