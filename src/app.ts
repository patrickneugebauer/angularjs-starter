import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';

import { servicesModule } from '@services';
import { componentsModule } from '@components';
import { featuresModule } from '@features';

export const appModule = angular
  .module('app', [
    'ui.router',
    UI_ROUTER_REACT_HYBRID,
    servicesModule.name,
    componentsModule.name,
    featuresModule.name
  ])

angular.bootstrap(
  document.getElementById('app'),
  [appModule.name]
)
