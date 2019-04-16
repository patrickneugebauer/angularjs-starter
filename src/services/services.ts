import angular from 'angular';

import { LogService } from './log-service/log.service';
import { StateService } from './state-service/state.service';

const servicesList = [
  LogService,
  StateService,
];

export const servicesModule = servicesList.reduce(
  (acc, x) => acc.service(x.displayName, x),
  angular.module('services', [])
);

export {
  LogService,
  StateService
};
