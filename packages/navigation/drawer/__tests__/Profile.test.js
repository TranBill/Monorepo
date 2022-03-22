import React from 'react';
import Profilescreen from '../src/screens/Profile';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Profilescreen />).toJSON();
  expect(tree).toMatchSnapshot();
});