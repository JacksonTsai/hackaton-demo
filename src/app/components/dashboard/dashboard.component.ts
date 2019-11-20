import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { DashboardData } from "../models/dashboard.model";
import { tap, switchMap } from "rxjs/operators";
import { interval } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  ntpEnable = new FormControl(false);
  ntpServer = new FormControl("ntpServer");
  ntpInterval = new FormControl("333");
  ntpTimeZone = new FormControl("ntpTimeZone");
  hostName = new FormControl("Host Name");
  description = new FormControl("Desc");

  get ntpEnableCtrl() {
    return this.ntpEnable as FormControl;
  }
  deviceInfo: DashboardData[];
  // deviceDetail: DashboardData;

  deviceInfoFn = this.service.getDeviceInfo$.pipe(
    tap(v => (this.deviceInfo = v))
  );

  autoDeviceInfoFn = this.service.getDeviceInfo$.pipe(
    tap(v => {
      this.deviceInfo = this.deviceInfo.map((d, i) => ({
        ...v[i],
        showDetail: d.showDetail
      }));
    })
  );

  deviceInfoById = id => this.updateForm(id);
  constructor(private fb: FormBuilder, private service: DashboardService) {}

  ngOnInit() {
    this.deviceInfoFn.subscribe();
    this.autoUpdate();
  }
  showDetailbyItem(id) {
    this.deviceInfo.forEach(v => {
      v.id === id ? (v.showDetail = !v.showDetail) : (v.showDetail = false);
    });
  }

  autoUpdate() {
    interval(1500)
      .pipe(switchMap(v => this.autoDeviceInfoFn))
      .subscribe();
  }

  updateForm(id) {
    this.deviceInfo.forEach(d => {
      if (d.id === id) {
        this.ntpEnable.setValue(d.time.ntp.enable);
        this.ntpServer.setValue(d.time.ntp.server);
        // this.ntpInterval.setValue(d.time.ntp.interval);
        this.ntpInterval.setValue(60000);
        this.ntpTimeZone.setValue(d.time.timezone);
        this.hostName.setValue(d.general.hostName);
        this.description.setValue(d.general.description);
        this.showDetailbyItem(id);
      }
    });
  }

  submit(id) {
    this.deviceInfo.forEach(d => {
      if (d.deviceName === id) {
        const payload = {
          ...d,
          general: {
            ...d.general,
            hostName: this.hostName.value,
            description: this.description.value
          },
          time: {
            ...d.time,
            timezone: this.ntpTimeZone.value,
            ntp: {
              enable: this.ntpEnable.value,
              server: this.ntpServer.value,
              interval: this.ntpInterval.value
            }
          }
        };
        this.service.patchDeviceById$(id, payload).subscribe();
      }
    });
  }
  ngOnDestroy() {}
}
