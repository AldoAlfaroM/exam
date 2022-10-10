import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from 'app/_models/_model.index';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl: string = 'https://frontend-exercise.herokuapp.com/kpis';

  constructor(private http: HttpClient){
  }
  
  searchSales(): Observable<Sale[]>{
    const url = `${ this.apiUrl }`;
    return this.http.get<Sale[]>( url )
      .pipe(
        tap(console.log)
      )
      
    
  }

  //  private data: Sale[] = [
  //   {
  //     "name": "Ventas",
  //     "goal": {
  //       "type": "Min",
  //       "value": 73340.31
  //     },
  //     "captured": 84808.07
  //   },
  //   {
  //     "name": "Cuentas por cobrar",
  //     "goal": {
  //       "type": "Max",
  //       "value": 76470.28
  //     },
  //     "captured": 71226.84
  //   },
  //   {
  //     "name": "Iventario",
  //     "goal": {
  //       "type": "Between",
  //       "value": {
  //         "min": 23182.74,
  //         "max": 38637.9
  //       }
  //     },
  //     "captured": 64525.06
  //   }
  // ];

  // get salesData(){
  //   return this.data;
  // }

 
}
