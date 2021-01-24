import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Platform, } from 'react-native';
import DatePicker from 'react-native-datepicker';
import DatePickerIOS from '@react-native-community/datetimepicker'
import moment from 'moment';
import { inject, observer } from 'mobx-react';

const MyDatePicker = inject('inputsStore')(observer(({ form, inputsStore, property, isMaxDate }) => {

  const value = Platform.OS ==='web'? 
  moment(inputsStore[form][property]).format('YYYY-MM-DD')
  :inputsStore[form][property]

  const dateTimeInputChangeHandler = ({ target }) => {
    const value = Date.parse(target.value)
    inputsStore.handleTextInput(form, property, value)
  };
  return (
    <View style={styles.container} >
      {Platform.OS === 'web' ?
        <input type="date" datatype="DD-MM-YYYY" value={value} onChange={dateTimeInputChangeHandler} />
        :
        <DatePickerIOS
          showIcon={false}
         display='spinner'
          style={{ width: 300 }}
          date={value}
          value={new Date(value)}
          mode="date" 
          minimumDate={isMaxDate ? Date.now() :  null}
          maximumDate={isMaxDate ? 999999999999999999999 : Date.now()}
          accessibilityLabel='birthdate'
    
          cancelBtnText="Cancel"
          
          onChange={(event,date) => {
            date &&
            inputsStore.handleTextInput(form, property,Date.parse(date) )
          }}
        />
      }
    </View>
  )

}))

export default MyDatePicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom:60,
    padding: 16,
    height:100,
    
  },
});
