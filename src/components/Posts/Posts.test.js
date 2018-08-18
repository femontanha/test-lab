import React from 'react';
import Posts from './Posts';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('render posts', () => {
  const posts = {
    '0': {
      body: 'Body',
      id: 1,
      title: 'Title',
      userId: 1,
    }
  }

  const component = renderer.create(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Posts posts={ posts } />
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
