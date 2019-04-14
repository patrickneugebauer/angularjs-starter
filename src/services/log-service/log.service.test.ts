import angular from 'angular';
require('angular-mocks');

import { LogService } from './log.service';

describe('logService', function() {
  let service: LogService;

  angular.mock.module.sharedInjector();

  beforeAll(angular.mock.module('app'));
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
