import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../atoms/CustomInput";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "../atoms/CustomButton";
import { LoginSchema } from "../validations/authValidations";

export default function LoginForm() {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ mailOrPhoneField: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
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
              <Text style={styles.emailLabel}>Email or Phone number</Text>

              <CustomInputz
                onChangeText={handleChange("mailOrPhoneField")}
                value={values.mailOrPhoneField}
                placeholder={"Enter Email or Phone number"}
                icon={"mail-outline"}
              />
              {touched.mailOrPhoneField && errors.mailOrPhoneField && (
                <Text style={styles.errorText}>{errors.mailOrPhoneField}</Text>
              )}
            
              <View style={{ marginTop: 48 }}>
                <CustomButton
                  disabled={!isValid}
                  onPress={handleSubmit}
                  title="Send Verification code"
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
  emailLabel: {
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
