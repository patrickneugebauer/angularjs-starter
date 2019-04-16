import { NavComponent } from './nav.component';
import { HelloWorldComponent, GoodbyeWorldComponent, HelloReact } from '@components';

export const navRoutes = [{
  name: 'nav',
  url: '/nav',
  component: NavComponent.displayName
}, {
  name: 'hello',
  url: '/hello',
  parent: 'nav',
  component: HelloWorldComponent.displayName
}, {
  name: 'goodbye',
  url: '/goodbye',
  parent: 'nav',
  component: GoodbyeWorldComponent.displayName
}, {
  name: 'react',
  url: '/react',
  parent: 'nav',
  component: HelloReact
}];
