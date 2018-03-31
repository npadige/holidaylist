import { Component } from '@angular/core';
import {HolidaysService} from './holidays.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HolidaysService]
})
export class AppComponent {

   allholidays:any[];
  constructor( private holidaysService:HolidaysService){
  }
  ngOnInit(){
    this.holidaysService.getHolidayList().subscribe(
      response => {
         console.log("data:"+response.json());
          this.allholidays=response.json()}
        );
  }


}
