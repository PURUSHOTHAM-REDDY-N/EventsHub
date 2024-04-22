import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import CustomButton from '../atoms/CustomButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../../../constants';
import { Formik } from 'formik';
import {VerificationSchema} from '../validations/authValidations'

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 50,paddingHorizontal:20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 1,
    borderColor: COLORS.grey2,
    borderRadius:5,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: COLORS.primary,
    color:COLORS.primary
  },
  
});

const CELL_COUNT = 5;


export default function VerificationForm() {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    // const handleSubmitVerifyCode=()=>{
    //   console.log(value)
    //   console.log("hello")
    // }
  return (
    <View>
      <Formik
        initialValues={{ verificationField: '' }}
        validationSchema={VerificationSchema}
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
              <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={values.verificationField}
        autoFocus={true}
        onChangeText={handleChange("verificationField")}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
      {touched.verificationField && errors.verificationField && (
                <Text style={styles.errorText}>{errors.verificationField}</Text>
              )}
      <View style={{ marginTop: 48,paddingHorizontal:20 }}>
                <CustomButton
                  title="Verify"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </View>
          </>
        )}
      </Formik>
      
    </View>
  )
}