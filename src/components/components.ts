import angular from 'angular';

import {
  helloWorldComponentConfig, HelloWorldComponent, helloWorldRouteConfig
} from '@components/hello-world/hello-world.component';
import {
  goodbyeWorldComponentConfig, GoodbyeWorldComponent, goodbyeWorldRouteConfig
} from '@components/goodbye-world/goodbye-world.component';
import {
  NavComponent, navComponentConfig, navRouteConfig
} from '@components/nav/nav.component';
import { helloReactRouteConfig } from '@components/hello-react/hello-react';

export const componentsModule = angular.module('components', [])
  .component(HelloWorldComponent.displayName, helloWorldComponentConfig)
  .component(GoodbyeWorldComponent.displayName, goodbyeWorldComponentConfig)
  .component(NavComponent.displayName, navComponentConfig);

export const componentRouteConfigs = [
  helloWorldRouteConfig,
  goodbyeWorldRouteConfig,
  helloReactRouteConfig,
  navRouteConfig
]
