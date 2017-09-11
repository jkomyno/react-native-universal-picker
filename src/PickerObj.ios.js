import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  ActionSheetIOS,
  ViewPropTypes,
  TextStylePropTypes,
} from 'react-native';
import { getPropArrFromChildren } from './utils';

export default class PickerObj extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onValueChange: PropTypes.func,
    cancelLabel: PropTypes.string,
    style: ViewPropTypes ? ViewPropTypes.style : PropTypes.object,
    itemStyle: TextStylePropTypes || PropTypes.object,
    selectedValue: PropTypes.any,
  };

  static defaultProps = {
    cancelLabel: 'Cancel',
    style: {},
    itemStyle: {},
    onValueChange: () => {},
  };

  constructor(props) {
    super(props);
    const { children } = props;
    const labels = getPropArrFromChildren(children, 'label');
    const values = getPropArrFromChildren(children, 'value');

    const defaultStyle = {
      height: '100%',
    };
    const defaultItemStyle = {
      fontSize: 18,
      color: '#007AFF',
    };

    this.style = Object.assign({}, defaultStyle, props.style);
    this.itemStyle = Object.assign({}, defaultItemStyle, props.itemStyle);

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
    const { selectedValue } = this.props;
    const {
      labels,
      values,
    } = this.state;

    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={this.style}
      >
        <Text
          numberOfLines={1}
          style={this.itemStyle}
        >
          {labels[values.indexOf(selectedValue)]}
        </Text>
      </TouchableOpacity>
    );
  }
}
