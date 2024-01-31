import { View, Text ,StyleSheet,TextInput} from "react-native";
import React from "react";
import {COLORS} from "../../../constants"
import { Ionicons } from "@expo/vector-icons";


export default function CustomInput({ icon, data,value,placeholder,keyboardType,onChange,onChangeText, ...props }) {
  return (
    <View style={styles.formContainer}>
      <Ionicons name={icon} size={18} color={COLORS.grey2} />
      <TextInput
      onChange={onChange}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
        style={styles.inputText}
        placeholder={placeholder}
        autoComplete="off"
        fontSize={16}
        cursorColor={COLORS.primary}
        {...props}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    borderColor: COLORS.black,
    borderWidth: 1,
    alignItems: "center",
    padding: 0,
    margin: 0,
    paddingLeft: 16,
    paddingRight: 32,
    borderRadius: 4,
  },
  inputText:{
    flex:1,
    height: '100%',
    margin: 12,
  }
});
