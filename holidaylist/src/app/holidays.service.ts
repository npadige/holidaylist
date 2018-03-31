import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class HolidaysService {

  constructor(private http:Http){
         
  }    
  getHolidayList(){
      return this.http.get("https://holidayapi.com/v1/holidays?key=1044b1ed-5b75-4609-aff5-f36f600106e2&country=AR&year=2017&month=04");
  }

}
