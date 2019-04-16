import angular from 'angular';
import 'angular-mocks';

import { servicesModule } from '@services';
import { HelloWorldComponent, componentsModule } from '@components';

describe('helloWorldComponent', function() {
  let controller: typeof HelloWorldComponent;

  angular.mock.module.sharedInjector();

  beforeAll(angular.mock.module(servicesModule.name));
  beforeAll(angular.mock.module(componentsModule.name));
  beforeAll(inject(($componentController: angular.IComponentControllerService) => {
    const locals = {}; // $scope, $element, $attrs, $transclude
    const bindings = {}; // passed to component, similar to react props
    controller = $componentController(HelloWorldComponent.displayName, locals, bindings);
  }));

  afterAll(() => {
    controller = null;
  })

  test('basic test', () => {
    expect(controller).toBeDefined();
  });
});
