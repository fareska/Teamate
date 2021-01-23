import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { inject, observer } from 'mobx-react';

const MyDatePicker = inject('inputsStore')(observer(({ form, inputsStore, property, isMaxDate }) => {

  const value = Platform.OS ==='web'? 
  moment(inputsStore[form][property]).format('YYYY-MM-DD')
  :moment(inputsStore[form][property]).format('DD-MM-YYYY')

  const dateTimeInputChangeHandler = ({ target }) => {
    const value = Date.parse(target.value)
    inputsStore.handleTextInput(form, property, value)
  };
  return (
    <View style={styles.container} >
      {Platform.OS === 'web' ?
        <input type="date" datatype="DD-MM-YYYY" value={value} onChange={dateTimeInputChangeHandler} />
        :
        <DatePicker
          showIcon={false}
          androidMode="default"
          style={{ width: 300 }}
          date={value}
          mode="date" 
          placeholder="DD/MM/YYYY"
          format="DD-MM-YYYY"
    
          minDate={isMaxDate ? moment().format('DD-MM-YYYY') :  moment(0).format('DD-MM-YYYY')}
          maxDate={isMaxDate ? '9/9/9999' : moment().format('DD-MM-YYYY')}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            
            dateInput: {
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              fontSize: 30,
          
            },
          
          }}
          onDateChange={(date) => {
            date = moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD')
            inputsStore.handleTextInput(form, property, Date.parse(date))
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
