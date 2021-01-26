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
import { Feather } from '@expo/vector-icons';

const { primary, secondary } = colors
const styles = mobileStyles
const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
const Comment = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user, commentData, loadComments }) => {
    const { first, last, u_id, comment, id } = commentData
  

    const deleteComment = async () => {
        await user.deleteComment(commentData.id)
        await loadComments()
    }

    return (
        <View style={styles.commentMainContainer}>
            <Image source={profilePic} style={styles.profileImage} />

            <View style={styles.commentContainer}>

                {(user.user.id + "" === u_id + "") ?
                    <Text style={styles.label}>You:
            </Text> : <Text style={styles.label}>{first} {last}:
            </Text>
                }
                <Text>{comment}</Text>

                {(user.user.id + "" === u_id + "") ?
                    <View style={styles.deleteBtn}>
                        <TouchableOpacity onPress={deleteComment}>
                            <Feather name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View> : <View />}

            </View>
        </View>
    )
}))

export default Comment
