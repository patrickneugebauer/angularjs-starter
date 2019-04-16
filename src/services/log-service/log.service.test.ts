import { LogService } from './log.service';

// import { get } from 'lodash-es'
// get({a:1}, 'a')

// import { DateTime } from 'luxon';

describe('logService', function() {
  let service: LogService;

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
