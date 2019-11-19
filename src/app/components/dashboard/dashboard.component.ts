import { Component, OnInit, OnDestroy } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  deviceInfo$ = this.service.getDeviceInfo$;
  getDeviceInfoById$ = id => this.service.getDeviceInfoById$(id);
  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getDeviceInfo$.subscribe(d => {
      console.dir(d[0]);
    });
  }

  ngOnDestroy() {}
}
