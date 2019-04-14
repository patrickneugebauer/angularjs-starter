import React from 'react';

// UI-router react does not like functional components as 'components' in the route config
// export const HelloReact = () => <span>Hello from React</span>;

export class HelloReact extends React.Component {
  render() {
    return <span>Hello from React</span>;
  }
}
