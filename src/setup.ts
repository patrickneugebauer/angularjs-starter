import angular from 'angular';
import 'angular-mocks';

import { servicesModule } from '@services/services';

angular.mock.module.sharedInjector();
beforeAll(angular.mock.module(servicesModule.name));
