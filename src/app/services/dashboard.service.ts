import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { of, interval } from 'rxjs';
import { DashboardData } from '../components/models/dashboard.model';
import { isNgTemplate } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDeviceData: { count: number; data: DashboardData[] } = {
    count: 2,
    data: [
      {
        id: 1,
        deviceName: 'edge-87',
        connectionStatus: 'connected',
        ethernets: [
          {
            broadcast: '10.144.51.255',
            displayName: 'LAN1',
            dns: ['10.128.8.8', '10.128.8.5'],
            enable: true,
            enableDhcp: false,
            gateway: '10.144.51.254',

            ip: '10.144.48.87',
            mac: '00:90:e8:81:00:41',
            name: 'eth0',
            netmask: '255.255.252.0',
            status: 'connected',
            subnet: '10.144.48.0',
            type: 'ethernets',
            wan: false
          },
          {
            broadcast: '192.168.4.255',
            displayName: 'LAN2',
            dns: [],
            enable: true,
            enableDhcp: false,
            gateway: '192.168.4.254',

            ip: '192.168.4.127',
            mac: '00:90:e8:81:00:42',
            name: 'eth1',
            netmask: '255.255.255.0',
            status: 'disconnected',
            subnet: '192.168.4.0',
            type: 'ethernets',
            wan: false
          }
        ],
        general: {
          cpu: 'ARMv7 Processor rev 2 (v7l)',
          description: '',
          deviceType: 'gateway',
          disk: [
            {
              device: '/dev/root',
              mount: '/',
              name: 'System',
              tags: {
                free: 'systemDiskFree',
                percent: 'systemDiskPercent',
                used: 'systemDiskUsed'
              }
            }
          ],
          firmwareVersion: '1.0',
          hostName: 'Moxa',

          lastBootTime: '2019-11-18T11:33:08+08:00',
          lastRebootTime: '',

          modelName: 'UC-8112A-ME-T-LX-AP (TPC)',

          serialNumber: 'TMOXA8100587',
          thingsproVersion: '1.1.0-309',
          type: 'general'
        },
        time: {
          ntp: {
            enable: false,

            server: 'pool.ntp.org'
          },
          timezone: 'Asia/Taipei',
          type: 'time'
        }
      },
      {
        id: 2,
        deviceName: 'edge-113',
        connectionStatus: 'connected',
        ethernets: [
          {
            broadcast: '10.144.51.255',
            displayName: 'LAN1',
            dns: ['10.128.8.5'],
            enable: true,
            enableDhcp: false,
            gateway: '10.144.51.254',

            ip: '10.144.48.113',
            mac: '00:90:e8:74:bb:43',
            name: 'eth0',
            netmask: '255.255.252.0',
            status: 'connected',
            subnet: '10.144.48.0',
            type: 'ethernets',
            wan: true
          },
          {
            broadcast: '192.168.4.255',
            displayName: 'LAN2',
            dns: [],
            enable: true,
            enableDhcp: false,
            gateway: '192.168.4.254',

            ip: '192.168.4.127',
            mac: '00:90:e8:74:bb:44',
            name: 'eth1',
            netmask: '255.255.255.0',
            status: 'disconnected',
            subnet: '192.168.4.0',
            type: 'ethernets',
            wan: false
          }
        ],
        general: {
          cpu: 'ARMv7 Processor rev 2 (v7l)',
          description: 'hello12',
          deviceType: 'gateway',
          disk: [
            {
              device: '/dev/root',
              mount: '/',
              name: 'System',
              tags: {
                free: 'systemDiskFree',
                percent: 'systemDiskPercent',
                used: 'systemDiskUsed'
              }
            }
          ],
          firmwareVersion: '3.1',
          hostName: 'world1112',

          lastBootTime: '2019-11-20T01:29:13+08:00',

          modelName: 'UC-8112-LX',
          serialNumber: 'TAHJB1126785',
          thingsproVersion: '1.1.0-404',
          type: 'general'
        },
        time: {
          ntp: {
            enable: false,

            server: 'pool.ntp.org'
          },
          timezone: 'Asia/Taipei',
          type: 'time'
        }
      }
    ]
  };

  constructor(private http: HttpClient) {}

  PATH = '/api/v1/devices';

  // getDeviceInfo$ = of(this.getDeviceData).pipe(
  //   map(d => d.data),
  //   map(v => v.map(item => ({ ...item, showDetail: false })))
  // );

  getDeviceInfo$ = this.http.get(this.PATH).pipe(
    map((d: any) => d.data),
    map(v => v.map(item => ({ ...item, showDetail: false })))
  );

  patchDeviceById$ = (id, payload: DashboardData) =>
    this.http.patch(`${this.PATH}/${id}`, {
      description: payload.general.description,
      hostname: payload.general.hostName
    });
}
