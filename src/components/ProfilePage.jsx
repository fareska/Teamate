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

// import profileIcon from '../../assets/profileIcon.jpg'


// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles

const ProfilePage = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {

    const [addFriendButton, setAddFriendButton] = useState(false)



    const { profile } = user

    console.log(profile.match);



    const add_friend = async () => {
        setAddFriendButton(true)
        console.log('Simple Button pressed')
        let data = { mainUserId: user.user.id, subUserId: profile.id }
        const res = await user.add_friend(data)

    }


    // <ProfileSports/>
    // <ProfileData />
    return (
        <SwipableView style={styles.container}>
            <Button title="Back" onPress={navigator.previous} />


            <View><Text>Friends</Text></View>
            <View style={styles.friends}>
                {friends.map((f, i) =>
                    <Image style={styles.image} key={i} source={{
                        height: 75,
                        width: 75,
                        uri: f.image
                    }} />)}
                <Button title='Show all' />
            </View>





            <ScrollView>
                <View>
                    <Text>Events</Text>

                    <View>
                        {profile.events.map((p, i) => <View key={i} >
                            <Image style={styles.image}
                                source={{
                                    height: 25,
                                    width: 25,
                                    uri: "https://picsum.photos/200/300"
                                }}
                            />
                            <Text>{p.sport}</Text>
                            <Text>{p.adress}</Text>
                            <Text>{p.city}</Text>
                            <Text>{p.date}</Text>
                            <FontAwesomeIcon icon={faTrash} />
                        </View>)}
                    </View>

                </View>
            </ScrollView>
        </SwipableView>


    );

}))



const friends = [{ image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
    , { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
]
export default ProfilePage