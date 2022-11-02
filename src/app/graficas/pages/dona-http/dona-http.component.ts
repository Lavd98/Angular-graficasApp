import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 350, 450, 100 ], backgroundColor: ['#398AE0','#31F7F7', '#2FED85'] },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getDataUsuarios().subscribe(data =>{
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);

    //   this.doughnutChartData = {
    //     labels: labels,
    //     datasets: [{data: values}]
    //   }
    // })
    
    this.graficasService.getUsuariosRedesData().subscribe(({labels, values}) =>{
      this.doughnutChartData = {
            labels: labels,
            datasets: [{data: values}]
          }
    })
  }

}
