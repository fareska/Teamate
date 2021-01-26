import React, { useState } from 'react'
import { render } from 'react-dom'
import { View, Text, Image, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native'
// import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../styles/mobile/ProfilePage'
import { inject, observer } from 'mobx-react';
import SwipableView from './subComponent/SwipableView';
import ProfileData from './subComponent/ProfileData';
import ProfileSports from './subComponent/ProfileSports';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SwipableScrollView from './subComponent/SwipableScrollView';
import AppHeader from './subComponent/AppHeader';
import profilePic from '../../assets/profileIcon.jpg'
import EventFeed from './subComponent/EventFeed';
import SelectableButton from './subComponent/SelectableButton';
// import profileIcon from '../../assets/profileIcon.jpg'


// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles

const ProfilePage = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {

    const [addFriendButton, setAddFriendButton] = useState(false)
    const { profile } = user
    const add_friend = async () => {
        setAddFriendButton(true)
        console.log('Simple Button pressed')
        let data = { mainUserId: user.user.id, subUserId: profile.id }
        const res = await user.add_friend(data)
    }

    // <ProfileSports/>
    // <ProfileData />
    return (
        <View style={styles.profileMainContainer}>
            <AppHeader viewBackButton={true} viewLogoutBtn={true} />
            <SwipableScrollView style={styles.container}>
                <View style={styles.profilePictureContainer}>
                    <Image source={profilePic} style={styles.profilePic} />
                    <Text style={styles.profileName} >{profile.user.first} {profile.user.last}</Text>
                </View>
                <View><Text style={styles.label}>Friends</Text></View>
                <View style={styles.friends}>
                    {friends.map((f, i) =>
                        <Image style={styles.image} key={i} source={{
                            height: 60,
                            width: 60,
                            uri: f.image
                        }} />)}
                    <Button title='Show all' />
                </View>
                <Text style={styles.label}>Sports Interests</Text>
                <View style={styles.sportsContainer}>
                    {profile.sport.map((s,i) => {
                    console.log(s);
                    return <SelectableButton style={styles} sport={{sport:s}} key={i} disableBtn={true}/>})}

                </View>

                <Text style={styles.label}>Created events</Text>

                <View style={styles.profileEventsCOntainer}>
                    {profile.events.map((f, i) => {
                        return <EventFeed key={i} eventFeed={f} style={styles} disableName={true} disablePartis={true} />
                    })}

                </View>


                <View style={styles.footer}>


                </View>
            </SwipableScrollView>

        </View>

    );

}))



const friends = [{ image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
    , { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
]
export default ProfilePage