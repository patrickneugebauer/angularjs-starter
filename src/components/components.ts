import angular from 'angular';

import {
  helloWorldComponentConfig, HelloWorldComponent, helloWorldRouteConfig
} from '@components/hello-world/hello-world.component';
import {
  goodbyeWorldComponentConfig, GoodbyeWorldComponent, goodbyeWorldRouteComfig
} from '@components/goodbye-world/goodbye-world.component';
import { helloReactRouteConfig } from '@components/hello-react/hello-react';

export const componentsModule = angular.module('components', [])
  .component(HelloWorldComponent.displayName, helloWorldComponentConfig)
  .component(GoodbyeWorldComponent.displayName, goodbyeWorldComponentConfig);

export const componentRouteConfigs = [
  helloWorldRouteConfig,
  goodbyeWorldRouteComfig,
  helloReactRouteConfig
]
