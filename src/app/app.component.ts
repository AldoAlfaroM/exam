import { Component } from '@angular/core';

import { Sale } from './_models/_model.index';
import { DashboardService } from './_services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //single=[];
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  
  

  constructor( private dashboardService: DashboardService) {
  }

  dataSales = [
      {
        "name": "Ventas",
        "goal": {
          "type": "Min",
          "value": 73340.31
        },
        "captured": 84808.07
      }
    ];
  
  // onSelect(data: any): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data: any): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data: any): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

  get salesData(){
    return this.dashboardService.searchSales();
  }
    
}
