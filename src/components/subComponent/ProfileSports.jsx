
import React, { useState } from 'react'
import { render } from 'react-dom'
import { View, Text, Image, Button } from 'react-native'
// import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../../styles/mobile/ProfilePage'
import { inject, observer } from 'mobx-react';
// import profileIcon from '../../assets/profileIcon.jpg'


// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles





const ProfileSports = inject('user', 'inputsStore')(observer(({ user }) => {

    const { profile } = user



    return (

        <View>
            <Text>Sports</Text>
            {profile.sport.map((s, i) => <View key={i} style={styles.sports} ><Text>{s}</Text></View>)}
            <Button title='Add Sport' style={styles.editButton} />
        </View>

    );

}))

export default ProfileSports