import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Platform, TouchableHighlight,Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import DatePickerIOS from '@react-native-community/datetimepicker'
import moment from 'moment';
import { inject, observer } from 'mobx-react';

const MyDatePicker = inject('inputsStore')(observer(({ form, inputsStore, property, isMaxDate }) => {
  const [showDatePicker, setDatePicker] = useState(false)
  const value = Platform.OS === 'web' ?
    moment(inputsStore[form][property]).format('YYYY-MM-DD')
    : inputsStore[form][property]

  const dateTimeInputChangeHandler = ({ target }) => {
    const value = Date.parse(target.value)
    inputsStore.handleTextInput(form, property, value)
  };
  if (Platform.OS !== 'android') {
    return (
      <View style={styles.container} >
        {Platform.OS === 'web' ? <View>
          <input type="date" datatype="DD-MM-YYYY" value={value} placeholder="date" onChange={dateTimeInputChangeHandler} />
        </View>
          :
          <DatePickerIOS
            showIcon={false}
            display='spinner'
            style={{ width: 300 }}
            date={value}
            value={new Date(value)}
            mode="date"
            minimumDate={isMaxDate ? Date.now() : null}
            maximumDate={isMaxDate ? 999999999999999999999 : Date.now()}
            accessibilityLabel='birthdate'
            cancelBtnText="Cancel"

            onChange={(event, date) => {
              date &&
                inputsStore.handleTextInput(form, property, Date.parse(date))
            }}
          />
        }
      </View>
    )
  } else {
    return <View>
      <TouchableHighlight onPress={() => setDatePicker(true)}>
        <View style={{
       
          width:'100%',
          height: 50,
          borderBottomWidth:1,
          borderBottomColor: 'grey',
          borderStyle: 'solid',
          alignSelf:'center',
          justifyContent:'center'
        }}>

        <Text style={{
          textAlign:'center',
          fontSize:30,
          fontWeight: '600'
        }}>{new Date(value).toLocaleDateString()}</Text>

        {showDatePicker && <DatePickerIOS
          showIcon={false}
          display='spinner'
          style={{ width: 300 }}
          date={value}
          value={new Date(value)}
          mode="date"
          minimumDate={isMaxDate ? Date.now() : null}
          maximumDate={isMaxDate ? 999999999999999999999 : Date.now()}
          accessibilityLabel='birthdate'
          cancelBtnText="Cancel"
          
          onChange={(event, date) => {
            setDatePicker(false)
            date &&
            inputsStore.handleTextInput(form, property, Date.parse(date))
          }}
          />}

          </View>
      </TouchableHighlight>
    </View>
  }

}))

export default MyDatePicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 60,
    padding: 16,
    height: 100,

  },
});
