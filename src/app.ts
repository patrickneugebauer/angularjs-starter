import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import React from 'react';
import ReactDOM from 'react-dom';

import { StateService } from './services/state.service';
import { helloWorldComponentConfig } from './components/hello-world/hello-world.component';
import { goodbyeWorldComponentConfig } from './components/goodbye-world/goodbye-world.component';
import { HelloReact } from './components/hello-react/hello-react';

angular
  .module('app', ['ui.router', UI_ROUTER_REACT_HYBRID])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'hello',
      url: '/',
      component: 'helloWorld'
    }).state({
      name: 'goodbye',
      url: '/bye',
      component: 'goodbyeWorld'
    }).state({
      name: 'react',
      url: '/react',
      component: HelloReact
    });
  })
  .service('stateService', StateService)
  .component('helloWorld', helloWorldComponentConfig)
  .component('goodbyeWorld', goodbyeWorldComponentConfig);
