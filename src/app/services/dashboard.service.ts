import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
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
        deviceName: 'edgeThingspro01',
        ethernets: [
          {
            broadcast: '10.144.51.255',
            displayName: 'LAN1',
            dns: ['10.128.8.5'],
            enable: true,
            enableDhcp: false,
            gateway: '10.144.51.254',
            id: 1,
            ip: '10.144.48.110',
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
            id: 2,
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
              },
              total: 7140088832
            }
          ],
          firmwareVersion: '3.1',
          hostName: 'Moxa',
          id: 1,
          lastBootTime: '2019-11-19T18:29:24+08:00',
          memorySize: 523890688,
          modelName: 'UC-8112-LX',
          serialNumber: 'TAHJB1126785',
          thingsproVersion: '1.1.0-400',
          type: 'general'
        },
        gps: {
          capabilities: {
            interface: ['']
          },
          id: 1,
          interface: '',
          location: {
            lat: 0,
            lng: 0
          },
          mode: 'manual',
          type: 'gps'
        },
        time: {
          id: 1,
          ntp: {
            enable: false,
            interval: 7200,
            server: 'pool.ntp.org'
          },
          timezone: 'Asia/Taipei',
          type: 'time'
        }
      },
      {
        id: 2,
        deviceName: 'edgeThingspro02',
        ethernets: [
          {
            broadcast: '10.144.51.255',
            displayName: 'LAN1',
            dns: ['10.128.8.5'],
            enable: true,
            enableDhcp: false,
            gateway: '10.144.51.254',
            id: 1,
            ip: '10.144.48.110',
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
            id: 2,
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
              },
              total: 7140088832
            }
          ],
          firmwareVersion: '3.1',
          hostName: 'Moxa',
          id: 1,
          lastBootTime: '2019-11-19T18:29:24+08:00',
          memorySize: 523890688,
          modelName: 'UC-8112-LX',
          serialNumber: 'TAHJB1126785',
          thingsproVersion: '1.1.0-400',
          type: 'general'
        },
        gps: {
          capabilities: {
            interface: ['']
          },
          id: 1,
          interface: '',
          location: {
            lat: 0,
            lng: 0
          },
          mode: 'manual',
          type: 'gps'
        },
        time: {
          id: 1,
          ntp: {
            enable: false,
            interval: 7200,
            server: 'pool.ntp.org'
          },
          timezone: 'Asia/Taipei',
          type: 'time'
        }
      }
    ]
  };

  deviceDataById: { data: DashboardData } = {
    data: {
      id: 1,
      ethernets: [
        {
          broadcast: '10.144.51.255',
          displayName: 'LAN1',
          dns: ['10.128.8.5'],
          enable: true,
          enableDhcp: false,
          gateway: '10.144.51.254',
          id: 1,
          ip: '10.144.48.110',
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
          id: 2,
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
            },
            total: 7140088832
          }
        ],
        firmwareVersion: '3.1',
        hostName: 'Moxa',
        id: 1,
        lastBootTime: '2019-11-19T18:29:24+08:00',
        memorySize: 523890688,
        modelName: 'UC-8112-LX',
        serialNumber: 'TAHJB1126785',
        thingsproVersion: '1.1.0-400',
        type: 'general'
      },
      gps: {
        capabilities: {
          interface: ['']
        },
        id: 1,
        interface: '',
        location: {
          lat: 0,
          lng: 0
        },
        mode: 'manual',
        type: 'gps'
      },
      time: {
        id: 1,
        ntp: {
          enable: false,
          interval: 7200,
          server: 'pool.ntp.org'
        },
        timezone: 'Asia/Taipei',
        type: 'time'
      }
    }
  };

  constructor(private http: HttpClient) {}

  PATH = '/api/v1/devices';

  // getDeviceInfo = this.http.get(this.PATH).pipe(
  //   map(d => this.getDeviceData),
  //   catchError(e => {
  //     throw e;
  //   })
  // );

  getDeviceInfo$ = of(this.getDeviceData).pipe(
    map(d => d.data),
    map(v => v.map(item => ({ ...item, showDetail: false })))
  );

  // getDeviceInfoById$ = id => this.http.get(`${this.PATH}/${id}`);
  getDeviceInfoById$ = id => of(this.deviceDataById).pipe(map(d => d.data),tap(v=>console.log(v)));

  patchDeviceById$ = (id, payload) =>
    this.http.patch(`${this.PATH}/${id}`, payload);
}
