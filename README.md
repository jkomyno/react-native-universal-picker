# react-native-universal-picker

[![npm version](https://badge.fury.io/js/react-native-universal-picker.svg)](https://badge.fury.io/js/react-native-universal-picker)

[![Build Status](https://travis-ci.org/jkomyno/react-native-universal-picker.svg?branch=master)](https://travis-ci.org/jkomyno/react-native-universal-picker)
---

Cross platform component that uses React Native's Picker on Android and ActionSheetIOS on iOS.
TypeScript type definitions available.

## Installation

`yarn add react-native-universal-picker`

Or, if you prefer using npm:

`npm i -S react-native-universal-picker`

## How to use

It exposes the same API as [React Native's Picker](https://facebook.github.io/react-native/docs/picker.html).

```javascript
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Picker from 'react-native-universal-picker';

export default class Example extends PureComponent {
  state = {
    language: 'js',
  };

  onValueChange = (itemValue, itemIndex) => {
    this.setState({
      language: itemValue,
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: '#FFF' }}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
        >
          <Picker.Item
            label="Java"
            value="java"
          />
          <Picker.Item
            label="JavaScript"
            value="js"
          />
        </Picker>
      </View>
    )
  }
}
```

## Available Props

Note that you can also use every prop from [React Native's Picker](https://facebook.github.io/react-native/docs/picker.html).
Check the [TypeScript type definition file](src/index.d.ts) for further info.

Prop              | Type     | Default  | Description
----------------- | -------- | -------- | --------------------
cancelLabel       | string   | 'Cancel' | The label of the latest ActionSheetIOS option button, which is the one that dismisses the picker on iOS

## Issues

At the moment it's been manually tested only on Android.

## Contributing

PRs are obviously welcome! :octocat:

## License

[MIT](LICENSE)
