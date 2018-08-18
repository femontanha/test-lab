import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

test('render Header component', () => {
  const component = renderer.create(
    <Header title={ 'React Fake Posts' } />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
