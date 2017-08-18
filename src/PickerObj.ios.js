import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActionSheetIOS,
  ViewPropTypes,
} from 'react-native';
import { getPropArrFromChildren } from './utils';

export default class PickerObj extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onValueChange: PropTypes.func,
    cancelLabel: PropTypes.string,
    style: ViewPropTypes.style,
    itemStyle: PropTypes.object,
    selectedValue: PropTypes.any,
  };

  static defaultProps = {
    cancelLabel: 'Cancel',
    style: {},
    itemStyle: {
      fontSize: 12,
    },
    onValueChange: () => {},
  };

  constructor(props) {
    super(props);
    const { children } = props;
    const labels = getPropArrFromChildren(children, 'label');
    const values = getPropArrFromChildren(children, 'value');

    this.state = {
      labels,
      values,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { children } = nextProps;
    const labels = getPropArrFromChildren(children, 'label');
    const values = getPropArrFromChildren(children, 'value');

    this.setState({
      labels,
      values,
    });
  }

  valueChangeCallback = (index) => {
    const {
      labels,
      values,
    } = this.state;

    if (index < labels.length) {
      this.props.onValueChange(values[index], index);
    }
  }

  handlePress = () => {
    const { cancelLabel } = this.props;
    const { labels } = this.state;

    const options = {
      options: [...labels, cancelLabel],
      cancelButtonIndex: labels.length,
    };

    ActionSheetIOS.showActionSheetWithOptions(options, this.valueChangeCallback);
  }

  render() {
    const {
      selectedValue,
      style,
      itemStyle,
    } = this.props;
    const {
      labels,
      values,
    } = this.state;

    const flatStyle = StyleSheet.flatten(style);

    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={[{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 5,
        }, flatStyle]}
      >
        <Text style={itemStyle}>
          {labels[values.indexOf(selectedValue)]}
        </Text>
        <Text style={itemStyle}>
          ▼
        </Text>
      </TouchableOpacity>
    );
  }
}
