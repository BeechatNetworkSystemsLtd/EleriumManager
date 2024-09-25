import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownPickerComponent = props => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, {zIndex: props.zIndex}]}>
      <DropDownPicker
        open={open}
        value={props?.value ?? null}
        items={props?.items ?? null}
        setOpen={setOpen}
        setValue={props.setValue ?? null}
        setItems={props.setItems ?? null}
        containerStyle={styles.containerStyle}
        itemSeparator={true}
        style={styles.dropdownStyles}
        itemSeparatorStyle={{backgroundColor: '#cccccc', height: 0}}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        zIndex={props.zIndex}
        zIndexInverse={props.zIndexInverse}
        dropDownDirection="BOTTOM"
      />
    </View>
  );
};
export default DropdownPickerComponent;
const styles = StyleSheet.create({
  container: {},
  containerStyle: {
    borderRadius: 0,
  },
  dropdownStyles: {
    borderColor: '#cccccc',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  dropDownContainerStyle: {
    borderColor: '#cccccc',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',

    // borderRadius: pixelPerfect(30),
  },
});
