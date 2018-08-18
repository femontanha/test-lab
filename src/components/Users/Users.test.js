import React from 'react';
import Users from './Users';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('render users', () => {
  const users = {
    '0': {
      id: 0,
      username: 'username',
      name: 'name',
      email: 'email',
      phone: 'phone',
      website: 'website'
    },
    '1': {
      id: 1,
      username: 'username',
      name: 'name',
      email: 'email',
      phone: 'phone',
      website: 'website'
    },
  }

  const component = renderer.create(
    <MemoryRouter initialEntries={[ '/users' ]}>
      <Users users={ users } />
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
