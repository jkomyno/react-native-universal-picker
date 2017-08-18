import React, { PureComponent } from 'react';
import { Picker } from 'react-native';
import PickerObj from './PickerObj'; // eslint-disable-line import/no-unresolved

export default class UniversalPicker extends PureComponent {
  static Item = Picker.Item;

  render() {
    return (
      <PickerObj {...this.props} />
    );
  }
}
