import { HelloReact } from '@components';

describe('helloReact', function() {
  test('basic test', () => {
    const reactElement = HelloReact.prototype.render();
    const text = reactElement.props.children.toLowerCase();
    const wordsToFind = ["hello", "react"];
    expect(
      wordsToFind.every(x => text.includes(x))
    ).toBe(true);
  });
});
