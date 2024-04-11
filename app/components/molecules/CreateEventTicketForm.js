import {React,useState} from 'react'
import { CreateEventTicketSchema } from '../validations/ticketValidation';
import { Formik } from "formik";
import { View , StyleSheet,ToastAndroid} from 'react-native';
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import { COLORS } from '../../../constants';
import { Picker } from "@react-native-picker/picker";
import { Text } from 'react-native-paper';
import createAxiosInstance from "../../utils/api";
import { useRouter } from "expo-router";





export default function CreateEventTicketForm({event_id}) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const fetchData = async (values) => {
      setLoading(true);
    const api = await createAxiosInstance();
    let response = await api.post(`/events/createEventTicket`, values);
    if (response.status === 200) {
      setLoading(false)
          //send to login page here
          ToastAndroid.show('Event Created successfully!', ToastAndroid.LONG);
          console.log(response.data.ticket_id);
          router.push({pathname:`/screens/home`})
    } else {
      setLoading(false);
      ToastAndroid.show('backend isuue', ToastAndroid.LONG);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ticket_name: "",
          ticket_type: "FREE",
          event_id:event_id.toString(),
          total_quantity:""
          
        }}
        validationSchema={CreateEventTicketSchema}
        onSubmit={(values) => {
          // make API request
          fetchData(values);
          console.log(values);
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
              style={{ flex: 1, flexDirection: "column" }}
            >
              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                Ticket Name 
              </Text>

              <CustomInput
                onChangeText={handleChange("ticket_name")}
                value={values.ticket_name}
                placeholder={"Ticket Name"}
              />
              {touched.ticket_name && errors.ticket_name && (
                <Text style={styles.errorText}>{errors.ticket_name}</Text>
              )}
              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                Ticket Type {`${isValid}`}
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
                  selectedValue={values.ticket_type}
                  onValueChange={(itemValue, itemIndex) =>{
                    console.log(values.ticket_type)
                    setFieldValue("ticket_type", itemValue)
                  }}
                >
                  <Picker.Item label="Free" value="FREE" />
                  <Picker.Item label="Paid" value="PAID" />
                </Picker>
              </View>
              {values.ticket_type === "PAID" ?<>
              <Text style={{ paddingBottom: 5 }} variant="titleMedium">
                Ticket Price
              </Text>
              <CustomInput
                keyboardType={'numeric'}

                onChangeText={handleChange("ticket_price")}
                value={values.ticket_price}
                placeholder={"Ticket Price"}
              />
              {touched.ticket_price && errors.ticket_price && (
                <Text style={styles.errorText}>{errors.ticket_price}</Text>
              )}
              </>:<></>}

              <Text style={{ paddingVertical: 5 }} variant="titleMedium">
                Ticket Quantity
              </Text>
              <CustomInput
              keyboardType={'numeric'}
                onChangeText={handleChange("total_quantity")}
                value={values.total_quantity}
                placeholder={"Ticket Quantity"}
              />
              {touched.total_quantity && errors.total_quantity && (
                <Text style={styles.errorText}>{errors.total_quantity}</Text>
              )}

              <View style={{ marginTop: 48 }}>
                <CustomButton loading={loading} disabled={!isValid}  onPress={handleSubmit} title="Create & Publish" />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
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
  errorText:{
    color:COLORS.red
  }
});
