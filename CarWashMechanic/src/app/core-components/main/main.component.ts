import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'node_modules/chart.js';
import { RegisterService } from 'src/app/services/register.service';
Chart.register(...registerables);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];

  constructor(private matdialog: MatDialog, private regServ: RegisterService) { }

  ngOnInit(): void {
    this.regServ.getUser().subscribe(result => {
      this.chartData = result;
      console.log("response",result);
      if (this.chartData != null) {
        for (let i = 0; i = this.chartData.length;) {
           console.log(this.chartData[i]);
          // this.labelData.push(this.chartData[i].mobileNumber);
          // this.realData.push(this.chartData[i].id);
        }
        this.renderChart(this.labelData,this.realData,'doughnut','doChart');
      }
    });
  }
  openRegister() {
    this.matdialog.open(RegisterComponent, {
      width: '45%',
    })
  }


  renderChart(labelData: any, realData: any,type:any,id:any) {
    const myChart = new Chart("doChart", {
      type: 'doughnut',
      data: {
        labels: labelData,
        datasets: [{
          label: '# of Votes',
          data: realData,
          backgroundColor: ['red'],
          borderColor:['white'],
          borderWidth:1
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      }
    });
  }
}
