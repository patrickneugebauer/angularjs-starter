import angular from 'angular';
import { UrlService } from '@uirouter/core'

import { navComponentConfig } from './nav-feature/nav.component';
import { navRoutes } from './nav-feature/nav.config';

const allComponents = [ navComponentConfig ];
const allRoutes = [...navRoutes];

export const featuresModule = allComponents.reduce(
    (acc, x) => acc.component(x.controller.displayName, x),
    angular.module('features', [])
  ).config(
    function($urlServiceProvider: UrlService, $stateProvider) {
      $urlServiceProvider.rules.initial('/nav')
      allRoutes.forEach(x => $stateProvider.state(x));
    }
  );
