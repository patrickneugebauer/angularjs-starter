import angular from 'angular';

import { HelloWorldComponent } from './hello-world.component';
import { componentsModule } from '@components/components';

describe('helloWorldComponent', function() {
  let controller: HelloWorldComponent;

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
