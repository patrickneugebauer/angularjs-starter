import angular from 'angular';

import { LogService } from '@services/log-service/log.service';
import { StateService } from '@services/state-service/state.service';

export const servicesModule = angular.module('services', [])
  .service(LogService.displayName, LogService)
  .service(StateService.displayName, StateService);
