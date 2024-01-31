import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants';

export default function RoundButton({onPress,
    onLongPress,
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}
    >
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.primary,
      padding:10,
      borderRadius: 50,
      width:50,
      height:50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // Add any additional styles or override default styles here
    },
    disabledButton: {
      backgroundColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      // Add any additional styles or override default styles here
    },
  });

