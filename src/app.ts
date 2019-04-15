import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';

import { servicesModule } from '@services/services';
import { componentsModule, componentRouteConfigs } from '@components/components';

angular
  .module('app', [
    'ui.router',
    UI_ROUTER_REACT_HYBRID,
    servicesModule.name,
    componentsModule.name
  ])
  .config(function($stateProvider) {
    componentRouteConfigs.forEach(x => {
      $stateProvider.state(x);
    });
  });
