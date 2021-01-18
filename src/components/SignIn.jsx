import React from 'react'
import { Text, View, Platform, TextInput, TouchableOpacity,  } from 'react-native';

    import AsyncStorage from '@react-native-community/async-storage'

import { styles as webStyles } from '../styles/webStyles'
import { styles as mobileStyles } from '../styles/mobileStyles'
const styles = (Platform.OS === "web") ? webStyles : mobileStyles

const SignIn = () => {
    // AsyncStorage.setItem('test','hello world!')
    AsyncStorage.getItem('test').then(res => console.log(res))
    return (
        <View style={styles.signIn}>
            
            <View style={styles.logoContainer}>
                <View style={styles.circle}></View>
                <Text style={styles.logo}>Teamate</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign in</Text>
                <Text style={styles.subTitle}>Hi There! Nice to see you.</Text>
            </View>
            <View style={styles.signInInputsContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput textContentType="username" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput textContentType="password" style={styles.input} secureTextEntry={true} />
            </View>
            </View>
            <View style={styles.signInBtnContainer}>
                <TouchableOpacity style={styles.touchableButton} onPress={()=>console.log('touched')}>
                    <View style={styles.signInBtn}>
                        <Text  style={styles.btnText}>
                            Sign in
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableButton} onPress={()=>console.log('touched')}>
                    <View style={styles.signInBtnFacebook}>
                        <Text style={styles.btnText}>
                            Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log('touched')} style={styles.signUpBtn}>
                    <Text style={styles.sinUpBtnText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn
