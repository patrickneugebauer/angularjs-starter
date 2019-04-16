import { StateService } from '@services';

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
