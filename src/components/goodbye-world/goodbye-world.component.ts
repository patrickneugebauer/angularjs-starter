import { StateService } from '@services/state-service/state.service';

export class GoodbyeWorldComponent {
  static $inject = [StateService.displayName];
  static displayName = 'goodbyeWorldComponent';
  message = this.stateService.farewell;
  constructor(private stateService: StateService) {}
};

export const goodbyeWorldComponentConfig = {
  controller: GoodbyeWorldComponent,
  controllerAs: 'vm',
  template: `<span>Message: {{vm.message}}</span>`
};

export const goodbyeWorldRouteComfig = {
  name: 'goodbye',
  url: '/goodbye',
  component: GoodbyeWorldComponent.displayName
}
