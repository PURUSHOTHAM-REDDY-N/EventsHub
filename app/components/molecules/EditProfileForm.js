import { React, useState, useEffect } from "react";
import { CreateEventTicketSchema } from "../validations/ticketValidation";
import { Formik } from "formik";
import { View, StyleSheet, ToastAndroid } from "react-native";
import CustomButton from "../atoms/CustomButton";
import CustomInput from "../atoms/CustomInput";
import { COLORS } from "../../../constants";
import { Text } from "react-native-paper";
import createAxiosInstance from "../../utils/api";
import { useRouter } from "expo-router";
import { getDataFromStorage } from "../../utils/storage";
import DateTimePicker from "../atoms/DateTimePicker";
import CountryPickerComponent  from "../atoms/CountryPicker";
import { EditProfileSchema } from "../validations/editProfileValidation";

export default function EditProfileForm({ username, email }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState();

  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.post(`/auth/editUserProfile`, values);

    if (response.status === 200) {
      setLoading(false);
      ToastAndroid.show("User Updated", ToastAndroid.LONG);

      //send to login page here
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  const fetchUserDetails = async () => {
    const user = await getDataFromStorage("auth");
    setUserDetails(user.user);
    console.log("user here ", user);
  };

  useEffect(() => {
    fetchUserDetails()
    // fetchData()
  }, []);

  return (
    <View style={styles.container}>
      {userDetails && <>
        <Formik
        initialValues={{
          username: userDetails.username,
          email: userDetails.email,
          dob: new Date().toISOString(),
          country: "",
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values) => {
          // make API request
          console.log(values);
          fetchData(values);
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
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                User Name
              </Text>

              <CustomInput
                editable={false}
                onChangeText={handleChange("username")}
                value={values.username}
                disabled={true}
                placeholder={"username"}
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                Email
              </Text>
              <CustomInput
                editable={false}
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder={"Email"}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                Date Of Birth 
              </Text>

              <DateTimePicker
                maximumDate={new Date()}
                value={values.dob}
                date={new Date(values.dob)}
                mode={"date"}
                onConfirm={(date) => {
                  setFieldValue("dob", date.toISOString());
                }}
              />
              <Text>{values.dob}</Text>
              <Text>{values.country}</Text>
              {touched.dob && errors.dob && (
                <Text style={styles.errorText}>{errors.dob}</Text>
              )}
              <CountryPickerComponent  valueChanged={(country)=>setFieldValue("country", country)} />
              {touched.country && errors.country && (
                <Text style={styles.errorText}>{errors.country}</Text>
              )}
              <View style={{ marginTop: 48 }}>
                <CustomButton
                disabled={!isValid}
                  loading={loading}
                  onPress={handleSubmit}
                  title="Submit Changes"
                />
              </View>
            </View>
          </>
        )}
      </Formik>
      </>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    paddingHorizontal: 24,
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
  errorText: {
    color: COLORS.red,
  },
});
