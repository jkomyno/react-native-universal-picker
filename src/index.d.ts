declare module 'react-native-universal-picker' {
  import { PureComponent } from 'react';
  import { ViewPropTypes } from 'react-native';
  
  // adapted from here:
  // https://github.com/facebook/react-native/blob/master/Libraries/Components/Picker/Picker.js
  export interface UniversalPickerProps {
    style?: ViewPropTypes.style,
    /**
     * Value matching value of one of the items. Can be a string or an integer.
     */
    selectedValue?: string | number,
    /**
     * Callback for when an item is selected. This is called with the following parameters:
     *   - `itemValue`: the `value` prop of the item that was selected
     *   - `itemPosition`: the index of the selected item in this picker
     */
    onValueChange?: (itemValue: string | number, itemPosition: number) => void,
    /**
     * If set to false, the picker will be disabled, i.e. the user will not be able to make a
     * selection.
     * @platform android
     */
    enabled?: boolean,
    /**
     * On Android, specifies how to display the selection items when the user taps on the picker:
     *
     *   - 'dialog': Show a modal dialog. This is the default.
     *   - 'dropdown': Shows a dropdown anchored to the picker view
     *
     * @platform android
     */
    mode?: 'dialog' | 'dropdown',
    /**
     * Style to apply to each of the item labels.
     * @platform ios
     */
    itemStyle?: any,
    /**
     * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
     * @platform android
     */
    prompt?: string,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string,
    /**
     * The label of the latest ActionSheetIOS option button, which is the one that dismisses
     * the picker on iOS
     * @platform ios
     */
    cancelLabel?: string,
  }

  export default class UniversalPicker extends PureComponent<UniversalPickerProps, null> {}
}
