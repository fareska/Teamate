import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Platform, TextInput, TouchableHighlight } from 'react-native';
import { styles as webStyles } from '../styles/webStyles'
import { styles as mobileStyles } from '../styles/mobileStyles'
const styles = (Platform.OS === "web") ? webStyles : mobileStyles

const SignIn = () => {
    return (
        <View style={styles.signIn}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>Teamate</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign in</Text>
                <Text style={styles.subTitle}>Hi There! Nice to see you.</Text>
            </View>
            <View style={styles.signInInputsContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput textContentType="email" style={styles.input}/>
                <Text style={styles.label}>Password</Text>
                <TextInput textContentType="password" secureTextEntry={true} />
            </View>
            <View style={styles.signInBtnContainer}>
                <TouchableHighlight>
                    <View>
                        <Text>
                            Sign in
                        </Text>
                    </View>
                </TouchableHighlight>
            <Button style={styles.signInBtn} title="Sign in now"/>
            </View>
        </View>
    )
}

export default SignIn
