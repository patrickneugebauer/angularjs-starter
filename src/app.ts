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
  ]);

// create a root for the app
// create a new blank div in the body, with a ui-view inside
const appRootElement = document.createElement('div');
const uiViewRootElement = document.createElement('ui-view');
appRootElement.appendChild(uiViewRootElement);
document.body.appendChild(appRootElement);

angular.bootstrap(
  appRootElement,
  [appModule.name]
)
