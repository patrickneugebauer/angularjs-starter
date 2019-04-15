import { LogService } from './log.service';

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
