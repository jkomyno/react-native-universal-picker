import React from 'react';
import Picker from '../src';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Picker>
      <Picker.Item
        label="Java"
        value="java"
      />
      <Picker.Item
        label="JavaScript"
        value="js"
      />
    </Picker>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
