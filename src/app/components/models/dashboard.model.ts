export interface DashboardData {
  id: number;
  deviceName?: string;
  ethernets: Ethernet[];
  general: DeviceInfo;
  gps: Gps;
  time: Time;
  showDetail?: boolean;
}

export interface Ethernet {
  name: string;
  enableDhcp: boolean;
  id: number;
  wan: boolean;
  mac: string;
  ip?: string;
  netmask?: string;
  subnet?: string;
  gateway?: string;
  dns?: string[];
  broadcast?: string;
  status?: string;
  restart?: boolean;
  displayName: string;
  enable: boolean;
  type: string;
}

export interface EthernetState {
  loading: boolean;
  data: Ethernet[];
}

export interface Gps {
  id: number;
  type: string;
  mode: string;
  interface: string;
  location: Coordinate;
  capabilities: GpsCapabilities;
}

export interface GpsState {
  data: Gps;
  requestLoading: boolean;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface GpsCapabilities {
  interface: string[];
}

export interface DeviceInfo {
  id: number;
  cpu: string;
  deviceType: string;

  modelName: string;
  firmwareVersion: string;
  thingsproVersion: string;
  serialNumber: string;
  // ip: number;
  lastBootTime: string;
  memorySize: number;
  // macAddress: string;
  // currentWan: string;
  // coordinates: Coordinates;
  description: string;
  hostName: string;
  disk: Disk[];
  type: string;
}

export interface Disk {
  device: string;
  mount: string;
  name: string;
  tags: Tags;
  total: number;
}

interface Tags {
  free: string;
  percent: string;
  used: string;
}

export interface Time {
  id: number;
  time?: string;
  type: string;
  timezone: string;
  ntp: NTP;
}

export interface NTP {
  enable: boolean;
  server: string;
  interval: number;
}
