import { css } from 'emotion';

import { StateService } from '@services/state-service/state.service';

const style = css`
  border: 1px solid black;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 0.25rem;
`;

export class HelloWorldComponent {
  static $inject = [StateService.displayName];
  static displayName = 'helloWorldComponent';
  message = this.stateService.greeting;
  constructor(private stateService: StateService) {}
};

export const helloWorldComponentConfig = {
  controller: HelloWorldComponent,
  controllerAs: 'vm',
  template: `<span class="${style}">Message: {{vm.message}}</span>`
};
