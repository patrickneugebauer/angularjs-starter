import angular from 'angular';

import { helloWorldComponentConfig, HelloWorldComponent } from './hello-world/hello-world.component';
import { goodbyeWorldComponentConfig, GoodbyeWorldComponent } from './goodbye-world/goodbye-world.component';

const componentList = [
  helloWorldComponentConfig,
  goodbyeWorldComponentConfig,
];

export const componentsModule = componentList.reduce(
  (acc, x) => acc.component(x.controller.displayName, x),
  angular.module('components', [])
);

export {
  HelloWorldComponent,
  GoodbyeWorldComponent
};

export {
  HelloReact
} from './hello-react/hello-react';
