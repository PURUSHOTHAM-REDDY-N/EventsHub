import { React, useState } from "react";
import { Redirect, useNavigation } from "expo-router";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../atoms/CustomInput";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "../atoms/CustomButton";
import { SignUpSchema } from "../validations/authValidations";
import createAxiosInstance from "../../utils/api";

export default function SignUpForm() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.post(`/auth/register`, values);
    console.log(response.status);
    if (response.status === 200) {
      setLoading(false);
          ToastAndroid.show("Signup successfull!", ToastAndroid.LONG);
          //send to login page here
          navigation.navigate("login");
    } else {
      setLoading(false);
      ToastAndroid.show('User Already Exists', ToastAndroid.LONG);
    }
  };

  

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          // make API request
          fetchData(values);
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
          /* and other goodies */
        }) => (
          <>
            <Text style={styles.label}>Enter Email</Text>

            <CustomInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder={"Enter Email"}
              icon={"mail-outline"}
            />

            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text style={[styles.label, { marginTop: 32 }]}>User Name</Text>

            <CustomInput
              onChangeText={handleChange("username")}
              value={values.username}
              placeholder={"Enter First and Last name"}
              icon={"person-outline"}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <Text style={[styles.label, { marginTop: 32 }]}>Password</Text>

            <CustomInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder={"Enter Password"}
              icon={"key-outline"}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={{ marginTop: 48 }}>
              <CustomButton
                loading={loading}
                disabled={!isValid}
                onPress={handleSubmit}
                title="Sign Up"
              />
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
  inputText: {
    flex: 1,
    height: "100%",
    margin: 12,
  },
});
