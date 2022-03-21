import React from 'react';
import AttendanceScreen from '../src/screens/Attendance';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AttendanceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});