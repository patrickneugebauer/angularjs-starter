import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import { hybridModule } from '@uirouter/react-hybrid'
import { UrlService } from '@uirouter/core'

import { servicesModule } from '@services/services';
import { componentsModule, componentRouteConfigs } from '@components/components';

export const appModule = angular
  .module('app', [
    'ui.router',
    UI_ROUTER_REACT_HYBRID,
    servicesModule.name,
    componentsModule.name
  ])

appModule.config(
  function($urlServiceProvider: UrlService, $stateProvider) {
    $urlServiceProvider.rules.initial('/nav')

    componentRouteConfigs.forEach(x => {
      $stateProvider.state(x);
    });
  }
);

angular.bootstrap(
  document.getElementById('app'),
  [appModule.name]
)
