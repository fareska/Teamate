import React from 'react'

import {
    Text, View, Platform,
    Keyboard, TextInput,
    TouchableOpacity, ScrollView, Alert,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles as webStyles } from '../styles/web/SignUp'
import { styles as mobileStyles } from '../styles/mobile/SignUp'
import { inject, observer } from 'mobx-react';
import SwipableScrollView from './subComponent/SwipableScrollView'
import SelectableButton from './subComponent/SelectableButton'

const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles
export const SignUp = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user }) => {
    const { sports, countries, signUpInputs, handleTextInput } = inputsStore
    const { first, last, email, city, country, birthdate, mobile, gender, password, confirmPassword } = signUpInputs

    const submit = async function () {


        switch (false) {
            case first !== '':
                alertMessage('Please enter your first name')
                return
            case last !== '':
                alertMessage('Please enter your last name')
                return
            case email !== '':
                alertMessage('Please enter your email')
                return
            case email.includes('@'):
                alertMessage('Please enter a valid email')
                return
            case email.split('@')[1].includes('.'):
                alertMessage('Please enter a valid email')
                return
            case country !== '':
                alertMessage('Please select a country')
                return
            case mobile !== '':
                alertMessage('Please enter your mobile number')
                return
            case gender !== 0:
                alertMessage('Please select your gender')
                return
            case password !== '':
                alertMessage('Please enter a password')
                return
            case password.length > 7:
                alertMessage('Password must have at least 8 characters')
                return
            case confirmPassword !== '':
                alertMessage('Enter your password again for confirmation')
                return
            case confirmPassword === password:
                alertMessage('Passwords do not match, please enter a password again!')
                return
        }
        const data = { ...signUpInputs }
        const res = await user.sign_up(data)
        if (res) {
            alertMessage('Successful! please sign in with your email and password')
            inputsStore.emptySignUpForm()
            navigator.redirect('signIn')
        }
    }
    return (
        <SwipableScrollView
            style={styles.signUpScrollable}
            contentContainerStyle={styles.signUpScrollableContainer}>

            <View style={styles.logoContainer}>
                <View style={styles.circle}></View>
                <Text style={styles.logo}>TeaMate</Text>
            </View>

            <View style={styles.signUp}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign up</Text>
                </View>
                <View style={styles.signInInputsContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>First name</Text>
                        <TextInput textAlign='center'
                            value={first} onChangeText={(value) => handleTextInput('signUpInputs', 'first', value)}
                            textContentType="name" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput textAlign='center'
                            value={last} onChangeText={(value) => handleTextInput('signUpInputs', 'last', value)}
                            textContentType="familyName" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput textAlign='center'
                            value={mobile} onChangeText={(value) => handleTextInput('signUpInputs', 'mobile', value)}
                            textContentType="telephoneNumber" style={styles.input} />
                    </View>

                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}
                            selectedValue={gender}
                            onValueChange={(value) => handleTextInput('signUpInputs', 'gender', value)}
                            mode="dialog"
                            enabled={true}>
                            <Picker.Item label="Select Gender" value={0} />
                            <Picker.Item label="Male" value={1} />
                            <Picker.Item label="Female" value={2} />
                        </Picker>

                    </View>
                  
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Country</Text>
                        <Picker style={styles.picker}
                            selectedValue={country}
                            onValueChange={(value) => handleTextInput('signUpInputs', 'country', value)}
                            mode="dialog"
                            enabled={true}>
                            {countries.map(c => <Picker.Item label={c.country} value={c.country} key={c.id} />)}
                        </Picker>

                    </View>


                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput textAlign='center'
                            value={email} onChangeText={(value) => handleTextInput('signUpInputs', 'email', value)}
                            textContentType="username" style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput textAlign='center'
                            value={password} onChangeText={(value) => handleTextInput('signUpInputs', 'password', value)}
                            textContentType="password" style={styles.input} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm password</Text>
                        <TextInput textAlign='center'
                            value={confirmPassword} onChangeText={(value) => handleTextInput('signUpInputs', 'confirmPassword', value)}
                            textContentType="password" style={styles.input} secureTextEntry={true} />
                    </View>
                    <Text style={styles.label}>Sports of your interest</Text>
                    <View style={styles.sportsContainer}>
                        {sports.map(s => <SelectableButton style={styles} sport={s} key={s.id} />)}
                    </View>
                </View>

                <View style={styles.signInBtnContainer}>
                    <TouchableOpacity style={styles.touchableButton} onPress={submit}>
                        <View style={styles.signInBtn}>
                            <Text style={styles.btnText}>
                                Submit
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigator.redirect('signIn')} style={styles.signUpBtn}>
                        <Text style={styles.sinUpBtnText}
                        >
                            Sign in
                         </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SwipableScrollView>


    )
}))

// const sports = [
//     { id: 1, selected: true, sport: 'Football' },
//     { id: 2, selected: false, sport: 'Boxing' },
//     { id: 3, selected: false, sport: 'Surfing' },
//     { id: 4, selected: true, sport: 'Krav Magaa' },
//     { id: 5, selected: false, sport: 'Basketball' },
//     { id: 6, selected: false, sport: 'Running' },
//     { id: 7, selected: false, sport: 'Swimming' },
//     { id: 9, selected: false, sport: 'Tennis' },
//     { id: 10, selected: true, sport: 'Climbing' },
//     { id: 11, selected: false, sport: 'Scootering' },
//     { id: 12, selected: false, sport: 'jiu jitsu' },
//     { id: 13, selected: true, sport: 'Hiking' },
//     { id: 14, selected: false, sport: 'Muay Thai' },
//     { id: 15, selected: false, sport: 'Diving' }
// ]

// const countries = [
//     { id: 8497, country: 'Andorra' },
//     { id: 8498, country: 'United Arab Emirates' },
//     { id: 8499, country: 'Afghanistan' },
//     { id: 8500, country: 'Antigua and Barbuda' },
//     { id: 8501, country: 'Anguilla' },
//     { id: 8502, country: 'Albania' },
//     { id: 8503, country: 'Armenia' },
//     { id: 8504, country: 'Angola' },
//     { id: 8505, country: 'American Samoa' },
//     { id: 8506, country: 'Argentina' },
//     { id: 8507, country: 'Austria' },
//     { id: 8508, country: 'Australia' },
//     { id: 8509, country: 'Aruba' },
//     { id: 8510, country: 'Aland Islands' },
//     { id: 8511, country: 'Azerbaijan' },
//     { id: 8512, country: 'Bosnia and Herzegovina' },
//     { id: 8513, country: 'Barbados' },
//     { id: 8514, country: 'Bangladesh' },
//     { id: 8515, country: 'Belgium' },
//     { id: 8516, country: 'Burkina Faso' },
//     { id: 8517, country: 'Bulgaria' },
// ]