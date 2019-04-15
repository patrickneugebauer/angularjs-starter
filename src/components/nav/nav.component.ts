export class NavComponent {
  static $inject = [];
  static displayName = 'navComponent';
};

export const navComponentConfig = {
  controller: NavComponent,
  controllerAs: 'vm',
  template: `
    <ui-view></ui-view>
    <br>
    <a ui-sref="hello" ui-sref-active="active">Hello</a>
    <a ui-sref="goodbye" ui-sref-active="active">Goodbye</a>
    <a ui-sref="react" ui-sref-active="active">React</a>
  `
};

export const navRouteConfig = {
  name: 'nav',
  url: '/nav',
  component: NavComponent.displayName
}
