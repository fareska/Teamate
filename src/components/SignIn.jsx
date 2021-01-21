import React from 'react'
import { Text, View, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../styles/mobile/SignIn'
import { inject, observer } from 'mobx-react';
import SwipableView from './subComponent/SwipableView';
const styles = (Platform.OS === "web") ? webStyles : mobileStyles
// AsyncStorage.setItem('test','hello world!')
// AsyncStorage.getItem('test').then(res => console.log(res))

const SignIn = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user }) => {
    const { signInInputs, handleTextInput } = inputsStore
    const { email, password } = signInInputs
    const submit = async ()=> {
        const res = await user.sign_in(signInInputs)
        if(res){
            navigator.redirect('feeds')
            inputsStore.emptySignInForm()
        }else{
            Platform.OS === 'web' && alert('Entered Email or Password might be wrong')
            Alert.alert('Entered Email or Password might be wrong')
            inputsStore.emptySignInPassword()
        }
    }
    return (
        <SwipableView style={styles.signIn}>
            <View style={styles.logoContainer}>
                <View style={styles.circle}></View>
                <Text style={styles.logo}>TeaMate</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign in</Text>
                <Text style={styles.subTitle}>Hi There! Nice to see you.</Text>
            </View>
            <View style={styles.signInInputsContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput textContentType="username" style={styles.input}
                        value={email} onChangeText={(value) => {
                            handleTextInput('signInInputs', 'email', value)
                        }
                        } />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput textContentType="password" style={styles.input} secureTextEntry={true}
                        value={password} onChangeText={(value) => {
                            handleTextInput('signInInputs', 'password', value)
                        }
                        } />
                </View>
            </View>
            <View style={styles.signInBtnContainer}>
                <TouchableOpacity style={styles.touchableButton} onPress={submit}>
                    <View style={styles.signInBtn}>
                        <Text style={styles.btnText}>
                            Sign in
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableButton} onPress={() => console.log('touched')}>
                    <View style={styles.signInBtnFacebook}>
                        <Text style={styles.btnText}>
                            Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.redirect('signUp')} style={styles.signUpBtn}>
                    <Text style={styles.sinUpBtnText} >Sign up</Text>
                </TouchableOpacity>
            </View>
        </SwipableView>
    )
}))
export default SignIn
