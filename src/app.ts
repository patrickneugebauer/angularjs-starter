import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';

import { LogService } from '@services/log-service/log.service';
import { StateService } from '@services/state-service/state.service';
import { helloWorldComponentConfig, HelloWorldComponent } from '@components/hello-world/hello-world.component';
import { goodbyeWorldComponentConfig, GoodbyeWorldComponent } from '@components/goodbye-world/goodbye-world.component';
import { HelloReact } from '@components/hello-react/hello-react';

angular
  .module('app', ['ui.router', UI_ROUTER_REACT_HYBRID])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'hello',
      url: '/',
      component: HelloWorldComponent.displayName
    }).state({
      name: 'goodbye',
      url: '/bye',
      component: GoodbyeWorldComponent.displayName
    }).state({
      name: 'react',
      url: '/react',
      component: HelloReact
    });
  })
  .service(LogService.displayName, LogService)
  .service(StateService.displayName, StateService)
  .component(HelloWorldComponent.displayName, helloWorldComponentConfig)
  .component(GoodbyeWorldComponent.displayName, goodbyeWorldComponentConfig);
