import angular from 'angular';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import React from 'react';
import ReactDOM from 'react-dom';

import { StateService } from './state.service';
import { helloWorldComponentConfig } from './hello-world.component';
import { goodbyeWorldComponentConfig } from './goodbye-world.component';
import { HelloWorld } from './hello-world';

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
      component: HelloWorld
    });
  })
  .service('stateService', StateService)
  .component('helloWorld', helloWorldComponentConfig)
  .component('goodbyeWorld', goodbyeWorldComponentConfig);
