import { React, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Text } from "react-native-paper"
import { COLORS } from "../../../constants";

export default function DateTimePicker({ mode, date, time, onConfirm,value,minimumDate,maximumDate }) {
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(null);

  const toggleDateTimePicker =  () => {
    console.log("hello");
    if (dateTimePickerVisible) {
       setDateTimePickerVisible(false);
    } else {
       setDateTimePickerVisible(true);
    }
  };

  return (
    <>
      <Text
        onPress={toggleDateTimePicker}
        style={{
          fontSize: 24,
          fontWeight: "bold",
          padding: 5,
          marginBottom: 20,
          borderRadius: 5,
          borderColor: COLORS.grey1,
          borderWidth: 1,
        }}
      >
        {time?new Date(value).toLocaleTimeString():new Date(value).toDateString()}
      </Text>
      <DateTimePickerModal
      maximumDate={maximumDate}
      minimumDate={minimumDate}
        isVisible={dateTimePickerVisible}
        mode={mode}
        date={date} // Pass selectedDate as the date prop
        time={time}
        onConfirm={onConfirm}
        onCancel={toggleDateTimePicker}
      />
    </>
  );
}
