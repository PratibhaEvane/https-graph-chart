import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.travel_expenense_chart();
    this.employee_status_chart();
    this.travelling_type_chart();
    this.visit_chart();
  }

  // inserted calender using fullcalender library
  public minDateCal1: Date = new Date("05/07/2016");
  public maxDateCal1: Date = new Date("08/27/2018");
  public valueCal1: Date = new Date("08/17/2017");
  public minDateCal2: Date = new Date("05/07/2016");
  public maxDateCal2: Date = new Date("08/27/2018");
  public valueCal2: Date = new Date("09/09/2017");
  // inserted various charts using chart.js library
  travel_expenense_chart() {
    const xValues = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    new Chart('travelChart', {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          borderColor: "#FFAC1C",
          data: [0, 60000, 70000, 75000, 90000, 70000, 90000],
          tension: 0.1,
          pointHoverRadius: 0

        }, {
          fill: false,

          borderColor: "#0B5345",
          data: [0, 50000, 70000, 75000, 90000, 70000, 90000],
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  employee_status_chart() {
    new Chart("employeeStatusChart", {
      type: 'bar',
      data: {
        labels: ['300', '600', '800', '1200', '1600', '2000', '2200', '2600'],
        datasets: [{
          label: '# of Votes',
          data: ['2000', '1300', '1800', '1000', '1900', '1300', '1600', '900'],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  travelling_type_chart() {
    new Chart("travellingTypeChart", {
      type: 'doughnut',
      data: {
        labels: ['#72A0C1', '#6699CC', '#FF7F50', '#002D62'],
        datasets: [{
          label: '',
          data: ['2000', '1300', '1800', '600'],
          borderJoinStyle: 'round',
          hoverOffset: 4
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  visit_chart() {
    new Chart("visitChart", {
      type: 'bar',
      data: {
        labels: ['300', '600', '800', '1200', '1600', '2000', '2200', '2600'],
        datasets: [{
          label: '# of Votes',
          data: ['2000', '1300', '1800', '1000', '1900', '1300', '1600', '900'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
