import { LogService } from '@services/log-service/log.service';

export class StateService {
  constructor(private logService: LogService) {
    this.logService.log('creating state service');
  }
  greeting = 'Hello World!';
  farewell = 'Goodbye World!';
};
