import { StateService } from '@services/state-service/state.service';

export class GoodbyeWorldComponent {
  static $inject = ['stateService'];
  message = this.stateService.farewell;
  constructor(private stateService: StateService) {}
};

export const goodbyeWorldComponentConfig = {
  controller: GoodbyeWorldComponent,
  controllerAs: 'vm',
  template: `<span>Message: {{vm.message}}</span>`
};
