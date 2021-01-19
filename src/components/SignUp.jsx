import React from 'react'

import { Text, View, Platform,
     Keyboard, TextInput,
      TouchableOpacity, ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { styles as webStyles } from '../styles/web/SignUp'
import { styles as mobileStyles } from '../styles/mobile/SignUp'
import { inject, observer } from 'mobx-react';
import SwipableScrollView from './subComponent/SwipableScrollView'

// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles
export const SignUp = inject("navigator")(observer(({ navigator }) => {

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
                        <TextInput textAlign='center' textContentType="name" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput textAlign='center' textContentType="familyName" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput textAlign='center' textContentType="telephoneNumber" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Country</Text>
                        <TextInput textAlign='center' textContentType="addressState" style={styles.input} />
                    </View>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}
                        mode="dialog"
                        enabled={true}>
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        </Picker>
                       
                    </View>


                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput textAlign='center' textContentType="username" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput textAlign='center' textContentType="password" style={styles.input} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm password</Text>
                        <TextInput textAlign='center' textContentType="password" style={styles.input} secureTextEntry={true} />
                    </View>
                </View>
                <View style={styles.signInBtnContainer}>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => console.log('touched')}>
                        <View style={styles.signInBtn}>
                            <Text style={styles.btnText}>
                                Submit
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('touched')} style={styles.signUpBtn}>
                        <Text style={styles.sinUpBtnText}
                            onPress={() => navigator.redirect('signIn')}>
                            Sign in
                         </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SwipableScrollView>


    )
})) 
