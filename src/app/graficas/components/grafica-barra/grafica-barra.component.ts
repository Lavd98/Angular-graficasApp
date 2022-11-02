import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
          min: 10
      }
    }
  }

  public barChartType: ChartType = 'bar';

  @Input() public barChartData!: ChartData<'bar'> 
  // {
  //   // labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   // datasets: [
  //   //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FD8D58' },
  //   //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#613AFC' },
  //   //   { data: [ 8, 20, 30, 40, 50, 70, 100 ], label: 'Series C', backgroundColor: '#E640B2' }
  //   // ]
  // };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0;
    }
  }

  

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.chart?.update();
  }

}
