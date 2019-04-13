import angular from 'angular';
import { StateService } from './state.service';
import { helloWorldComponentConfig } from './hello-world.component';

angular.module('app', [])
  .service('stateService', StateService)
  .component('helloWorld', helloWorldComponentConfig);
