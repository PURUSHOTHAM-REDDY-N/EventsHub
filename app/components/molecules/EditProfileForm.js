import { React, useState, useEffect } from "react";
import { Formik } from "formik";
import { View, StyleSheet, ToastAndroid,Image } from "react-native";
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
import * as ImagePicker from 'expo-image-picker';


export default function EditProfileForm({ username, email }) {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [image, setImage] = useState(null);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
      console.log('uri here ',result.assets[0])
    }
  };

  const postImage = async ()=>{
    const formData = new FormData();
    formData.append("image", {
      uri: image.uri,
      name: "myimage.jpg",
      filename:"imageFile",
      type: image.mimeType,
    });

    return formData

  }

  const uploadprofilePic=async()=>{
    setLoading(true);
    let api = await createAxiosInstance();
    const formData = new FormData();
    formData.append("image", {
      uri: image.uri,
      name: "myimage.jpg",
      filename:"imageFile",
      type: image.mimeType,
    });
    let response = await api.postImage(`/image/upload`, formData);

    if (response.status === 200) {
      setLoading(false);
      ToastAndroid.show("User Updated", ToastAndroid.LONG);

      //send to login page here
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  }



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
      <View style={styles.container}>
      <CustomButton title="Pick an image from camera roll" onPress={pickImage} />
      <CustomButton title="upload" onPress={uploadprofilePic} />
      {image && <Image source={{ uri: image.uri }} style={{width:200,height:200}} />}
    </View>
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
