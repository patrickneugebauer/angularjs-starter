import angular from 'angular';
import 'angular-mocks';

import { LogService, servicesModule } from '@services';

describe('logService', function() {
  let service: LogService;

  angular.mock.module.sharedInjector();

  beforeAll(angular.mock.module(servicesModule.name));
  beforeAll(inject(($injector: angular.auto.IInjectorService) => {
    service = $injector.get(LogService.displayName);
  }));

  afterAll(() => {
    service = null;
  });

  test('log', () => {
    expect(typeof service.log).toBe('function');
  });
});
