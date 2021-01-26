
import React, { useState } from 'react'
import { render } from 'react-dom'
import { View, Text, Image, Button, ScrollView } from 'react-native'
// import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../../styles/mobile/ProfilePage'
import { inject, observer } from 'mobx-react';
// import profileIcon from '../../assets/profileIcon.jpg'


// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles





const ProfileData = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {

    const [addFriendButton, setAddFriendButton] = useState(false)

    const { profile } = user

    const add_friend = async () => {
        setAddFriendButton(true)
        console.log('Simple Button pressed')
        let data = { mainUserId: user.user.id, subUserId: profile.id }
        const res = await user.add_friend(data)
    }

    return (
        <View>
            <ScrollView>

                <View style={styles.buttonContainer} >
                    <Text>ProfileData</Text>
                    <Button title='Edit' style={styles.editButton} />
                </View>

                <View style={styles.dataConatiner}>
                    <Image source={{
                        width: 100,
                        height: 100,
                        uri: 'https://picsum.photos/200/300'
                    }} />
                    <Text>{profile.user.first} {profile.user.last} </Text>
                    <Text>{profile.user.country}, {profile.user.city}</Text>
                    <Text>{profile.user.birthdate}</Text>
                    <Text>Bio, Say something</Text>
                </View>


                <View style={styles.buttonContainer} >
                    <View style={styles.Button} >
                        <Button
                            title="Add Friend"
                            disabled={addFriendButton}
                            onPress={add_friend}
                        />
                    </View>
                    <View style={styles.Button} >
                        <Button
                            title="Message"
                            onPress={() => console.log('Simple Message Button pressed')}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>


    );

}))

export default ProfileData