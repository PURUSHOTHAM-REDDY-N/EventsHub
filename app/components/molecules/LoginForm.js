import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid
} from "react-native";
import { COLORS } from "../../../constants";
import CustomInput from "../atoms/CustomInput";
import { Formik } from "formik";
import CustomButton from "../atoms/CustomButton";
import { LoginSchema } from "../validations/authValidations";
import createAxiosInstance from "../../utils/api";
import { useNavigation, router } from "expo-router";
import { storeDataInStorage,getDataFromStorage } from "../../utils/storage";

export default function LoginForm() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    router.replace("screens/(main)/home");
  };

  const fetchData = async (values) => {
    setLoading(true)
    const api = await createAxiosInstance();
    api
      .post(`/auth/login`, values)
      .then(async (response) => {
        // handle success
        console.log(response);
        if (response.status === 200) {
          setLoading(false)

          //send to login page here
          ToastAndroid.show('Login successfull!', ToastAndroid.LONG);
          console.log("before storage",response.data);
          await storeDataInStorage("auth", response.data);
          let datum = await getDataFromStorage("auth");
          console.log("after storage", datum);
          goToHome();
        }
      })
      .catch((error) => {
        setLoading(false)
        ToastAndroid.show(error.message, ToastAndroid.LONG);

        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
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
            <Text style={styles.emailLabel}>Email</Text>

            <CustomInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder={"Enter Email or Phone number"}
              icon={"mail-outline"}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Text onPress={() => goToHome()} style={styles.passwordLabel}>
              Password
            </Text>

            <CustomInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder={"Enter password"}
              icon={"mail-outline"}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={{ marginTop: 48 }}>
              <CustomButton
              loading={loading}
                disabled={!isValid}
                onPress={handleSubmit}
                title="Login"
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
  passwordLabel: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
    marginTop: 28,
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
