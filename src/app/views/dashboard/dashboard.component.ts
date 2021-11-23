import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    dashboard = {} as Dashboard;

    data = new Date();

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.carregarDashboard();
    }

    carregarDashboard() {
        this.dashboardService.getDashboard().subscribe((dashboard: Dashboard) => {
            this.dashboard = dashboard;
        })
    }
}