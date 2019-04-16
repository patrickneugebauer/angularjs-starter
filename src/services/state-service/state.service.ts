import { LogService } from '@services';

export class StateService {
  static $inject = [LogService.displayName];
  static displayName = 'stateService';
  constructor(private logService: LogService) {
    this.logService.log('creating state service');
  }
  greeting = 'Hello World!';
  farewell = 'Goodbye World!';
};
