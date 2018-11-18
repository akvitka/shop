import { InjectionToken } from '@angular/core';

export const CONSTANTS_SERVICE = new InjectionToken<string>('CONSTANTS_SERVICE');

export const Constants = {app: 'TaskManager', ver: '1.0'};
