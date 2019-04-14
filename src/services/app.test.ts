import angular from 'angular';
require('angular-mocks');
import { $injector } from '@uirouter/core';
require('../app');

import { StateService } from './state.service';

describe('stateService', function() {
  let service: StateService;
  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($injector) => {
    service = $injector.get('stateService');
  }));

  test('greeting', () => {
    expect(typeof service.greeting).toBe('string');
    expect(service.greeting.length).toBeGreaterThan(0);
  });

  test('farewell', () => {
    expect(typeof service.farewell).toBe('string');
    expect(service.farewell.length).toBeGreaterThan(0);
  });
});
