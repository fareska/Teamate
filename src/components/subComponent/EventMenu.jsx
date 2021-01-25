import React from 'react'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles as webStyles } from '../../styles/web/EventMenu'
import { styles as mobileStyles } from '../../styles/mobile/EventMenu'
import { inject, observer } from 'mobx-react'
import AppHeader from './AppHeader'
import Map from '../Map'
import MyDatePicker from './MyDatePicker'
const styles = mobileStyles
const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
const EventMenu = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user }) => {
    const { sports, countries, newEventForm, handleTextInput } = inputsStore
    const { user_id, sport, frequency, date, time, people_num, city, country, description, lon, lat, address } = newEventForm
    const submit = async () => {
        const newEvent = { ...newEventForm }
        newEvent.user_id = user.user.id
        try {
            const res = await user.create_event(newEvent)
            if (res.data) {
                alertMessage('Event added successfully!')
                inputsStore.emptyNewEventForm()
                navigator.hideEventMenu()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={styles.EventMenu}
            contentContainerStyle={styles.evenMenuContainer}>
            <AppHeader />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>New Event</Text>
            </View>
            <View style={styles.eventInputsContainer}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Sport</Text>
                    <Picker style={styles.picker}
                        selectedValue={sport}
                        onValueChange={(value) => handleTextInput('newEventForm', 'sport', value)}
                        mode="dialog"
                        enabled={true}>
                        {sports.map(s => <Picker.Item label={s.sport} value={s.sport} key={s.id} />)}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Number of participants</Text>
                    <Picker style={styles.picker}
                        selectedValue={people_num}
                        onValueChange={(value) => handleTextInput('newEventForm', 'people_num', value)}
                        mode="dialog"
                        enabled={true}>
                        {nums.map(n => <Picker.Item label={n} value={n} key={n} />)}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Date</Text>
                    <MyDatePicker
                        value={inputsStore.newEventForm.date}
                        onChange={inputsStore.handleTextInput}
                        form="newEventForm"
                        property="time"
                        
                        isMaxDate={false}
                    />

                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Time</Text>
                    <MyDatePicker
                        value={inputsStore.newEventForm.date}
                        onChange={inputsStore.handleTextInput}
                        form="newEventForm"
                        property="time"
                        type="time"
                        isMaxDate={true}
                    />

                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Repeat</Text>
                    <Picker style={styles.picker}
                        selectedValue={frequency}
                        onValueChange={(value) => handleTextInput('newEventForm', 'frequency', value)}
                        mode="dialog"
                        enabled={true}>
                        <Picker.Item label="Every.." value={''} />
                        <Picker.Item label="One Time" value={'oneTime'} />
                        <Picker.Item label="Daily" value={'daily'} />
                        <Picker.Item label="Weekly" value={"weekly"} />
                        <Picker.Item label="Monthly" value={"monthly"} />
                    </Picker>
                </View>

                <View style={styles.mapContainer}>
                    <Map
                        event={{ longitudeDelta: 35.2137, latitudeDelta: 31.7683, longitude: 35.2137, latitude: 31.7683 }}

                    ></Map>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Country</Text>
                    <Picker style={styles.picker}
                        selectedValue={country}
                        onValueChange={(value) => handleTextInput('newEventForm', 'country', value)}
                        mode="dialog"
                        enabled={true}>
                        {countries.map(c => <Picker.Item label={c.country} value={c.country} key={c.id} />)}
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>City</Text>
                    <TextInput textAlign='center'
                        value={city} onChangeText={(value) => handleTextInput('newEventForm', 'city', value)}
                        textContentType="addressCityAndState" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput textAlign='center'
                        value={address} onChangeText={(value) => handleTextInput('newEventForm', 'address', value)}
                        textContentType="addressCityAndState" style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput textAlign='center'
                        value={description} onChangeText={(value) => handleTextInput('newEventForm', 'description', value)}
                        textContentType="username" style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.touchableButton} onPress={submit}>
                        <View style={styles.signInBtn}>
                            <Text style={styles.btnText}>
                                Submit
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}></View>
            </View>
        </ScrollView>
    )
}))

export default EventMenu


const nums = []
for (let index = 1; index <= 100; index++) {
    nums.push(`${index}`)

}