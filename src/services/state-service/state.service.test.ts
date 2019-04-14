import angular from 'angular';
require('angular-mocks');
require('@app');

import { StateService } from './state.service';

describe('stateService', function() {
  let service: StateService;

  angular.mock.module.sharedInjector();

  beforeAll(angular.mock.module('app'));
  beforeAll(inject(($injector: angular.auto.IInjectorService) => {
    service = $injector.get('stateService');
  }));

  afterAll(() => {
    service = null;
  });

  test('greeting', () => {
    expect(typeof service.greeting).toBe('string');
    expect(service.greeting.length).toBeGreaterThan(0);
  });

  test('farewell', () => {
    expect(typeof service.farewell).toBe('string');
    expect(service.farewell.length).toBeGreaterThan(0);
  });
});
