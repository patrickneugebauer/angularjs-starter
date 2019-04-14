import angular from 'angular';
require('angular-mocks');

import { HelloWorldComponent } from './hello-world.component';

describe('helloWorldComponent', function() {
  let controller: HelloWorldComponent;

  angular.mock.module.sharedInjector();

  beforeAll(angular.mock.module('app'));
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
