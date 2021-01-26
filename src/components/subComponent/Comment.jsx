import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert, TextInput } from 'react-native'
import { styles as webStyles } from '../../styles/web/Comment'
import { styles as mobileStyles } from '../../styles/mobile/Comment'
import { FloatingAction } from "react-native-floating-action";
import profilIcon from '../../../assets/profileIcon.jpg'
import { PricingCard } from "react-native-elements";
import { colors } from '../../styles/COLORS'
import { useState } from 'react'
import profilePic from '../../../assets/profileIcon.jpg'


const { primary, secondary } = colors
const styles = mobileStyles
const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
const Comment = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user, commentData }) => {
    const { first, last, u_id, comment } = commentData
    console.log(user.user.id, u_id);
    return (
        <View style={styles.commentContainer}>

            {(user.user.id + "" === u_id + "") ?
                <Text style={styles.label}>You:
            </Text> : <Text style={styles.label}>{first} {last}:
            </Text>
            }
            <Text>{comment}</Text>

            {(user.user.id + "" === u_id + "") ?
            <View style={styles.deleteBtn}> 
            <Text>delete</Text> 
            </View>: <View />}

        </View>
    )
}))

export default Comment
