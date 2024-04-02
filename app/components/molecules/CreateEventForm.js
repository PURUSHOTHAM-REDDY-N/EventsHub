import { React, useState } from "react";
import { View, StyleSheet,ToastAndroid } from "react-native";
import { COLORS } from "../../../constants";
import CustomInput from "../atoms/CustomInput";
import { Formik } from "formik";
import CustomButton from "../atoms/CustomButton";
import createAxiosInstance from "../../utils/api";
import { CreateEventSchema } from "../validations/eventValidatons";
import { Text, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "../atoms/DateTimePicker";
import { useRouter } from "expo-router";

export default function CreateEventForm() {

  const [loading, setLoading] = useState(false);

  const router = useRouter();



  const fetchData = async (values) => {
    setLoading(true)
    const api = await createAxiosInstance();
    api
      .post(`events/createEvent`, values)
      .then(async (response) => {
        // handle success
        console.log(response);
        if (response.status === 200) {
          setLoading(false)
          //send to login page here
          console.log(response.data.event_id);
          router.push({pathname:`/screens/CreateEventTicket/${response.data.event_id}`})
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const item ={id:"11"}


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          description: "",
          start_date: new Date().toISOString(),
          start_time: new Date().toISOString(),
          end_time: new Date().toISOString(),
          event_location_type: "OFFLINE",
          event_location: "",
          event_type: "MARRIAGE",
        }}
        validationSchema={CreateEventSchema}
        onSubmit={(values) => {
          // make API request
          fetchData(values);
          console.log(values);
          // fetchData(values)
          console.log("submitted");
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
          setFieldValue,
          /* and other goodies */
        }) => (
          <>
            <View
              style={{ flex: 1, flexDirection: "column", marginBottom: 100 }}
            >
              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                Event Title
              </Text>

              <CustomInput
                onChangeText={handleChange("title")}
                value={values.title}
                placeholder={"Title"}
              />
              {touched.title && errors.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
              )}
              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                Description
              </Text>

              <CustomInput
                onChangeText={handleChange("description")}
                value={values.description}
                placeholder={"Enter description"}
                icon={"mail-outline"}
              />
              {touched.description && errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}

              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                start date
              </Text>

              <DateTimePicker
              minimumDate={new Date()}
                value={values.start_date}
                date={new Date(values.start_date)}
                mode={"date"}
                onConfirm={(date) => {
                  setFieldValue("start_date", date.toISOString());
                }}
              />

              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                start time
              </Text>
              <DateTimePicker
                value={values.start_time}
                time={new Date(values.start_time)}
                mode={"time"}
                onConfirm={(date) => {
                  setFieldValue("start_time", date.toISOString());
                }}
              />

              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                end time
              </Text>
              <DateTimePicker
              minimumDate={new Date(values.start_time)}
                value={values.end_time}
                time={new Date(values.end_time)}
                mode={"time"}
                onConfirm={(date) => {
                  setFieldValue("end_time", date.toISOString());
                }}
              />
              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                Event Type
              </Text>

              <View
                style={{
                  borderColor: COLORS.grey1,
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: 20,
                }}
              >
                <Picker
                  selectedValue={values.event_location_type}
                  onValueChange={(itemValue, itemIndex) =>{
                    console.log(values.event_location_type)
                    setFieldValue("event_location_type", itemValue)
                  }}
                >
                  <Picker.Item label="Offline" value="OFFLINE" />
                  <Picker.Item label="Online" value="ONLINE" />
                </Picker>
              </View>
              
              {values.event_location_type === "OFFLINE" ? 
                <>
                  <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                    Event Location
                  </Text>

                  <CustomInput
                    onChangeText={handleChange("event_location")}
                    value={values.event_location}
                    placeholder={"event location"}
                  />
                </>
               : ''}

              <Text style={{ paddingVertical: 10 }} variant="titleMedium">
                Event Type
              </Text>
              <View
                style={{
                  borderColor: COLORS.grey1,
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: 20,
                }}
              >
                <Picker
                  selectedValue={values.event_type}
                  onValueChange={(itemValue, itemIndex) =>
                    setFieldValue("event_type", itemValue)
                  }
                >
                  <Picker.Item label="Marriage" value="MARRIAGE" />
                  <Picker.Item label="College Fest" value="COLLEGE_FEST" />
                  <Picker.Item label="Farewell Part" value="FAREWELL_PARTY" />
                </Picker>
              </View>
              <View style={{ marginTop: 48 }}>
                <CustomButton loading={loading} disabled={!isValid}  onPress={handleSubmit} title="Create Event" />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  label: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
  bigLabel: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 16,
  },
});