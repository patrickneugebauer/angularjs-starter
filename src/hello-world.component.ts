import { StateService } from './state.service';

export class HelloWorldComponent {
  static $inject = ['stateService'];
  message = this.stateService.greeting;
  constructor(private stateService: StateService) {}
};

export const helloWorldComponentConfig = {
  controller: HelloWorldComponent,
  controllerAs: 'vm',
  template: `<span>Message: {{vm.message}}</span>`
};
