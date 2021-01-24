import React, { useState } from 'react'
import { render } from 'react-dom'
import { View, Text, Image, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native'
// import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../styles/mobile/ProfilePage'
import { inject, observer } from 'mobx-react';

// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles

const ProfilePage = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user }) => {

    const [addFriendButton, setAddFriendButton] = useState(false)



    const add_friend = async (mainUserId, subUserId) => {
        setAddFriendButton(true)
        console.log('Simple Button pressed')
        let data = { mainUserId, subUserId }
        const res = await user.add_friend(data)
        console.log(res);
    }






    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text>ProfilePage</Text>
                <Image source={{
                    width: 100,
                    height: 100,
                    uri: useruser.image
                }} />
                <Text>{useruser.first} {useruser.last} </Text>
                <Text>{useruser.country}, {useruser.city}</Text>
                <Text>{useruser.birthdate}</Text>
                <Text>Bio, Say something</Text>

                {addFriendButton 
                    ?<Button
                        title="Add Friend"
                        disabled
                        onPress={add_friend}
                    />
                    :<Button
                        title="Add Friend"
                        onPress={add_friend}
                    />
                }


                <Button
                    title="Message"
                    onPress={() => console.log('Simple Message Button pressed')}
                />

            </View>


            <View ><Text>Friends</Text></View>

            <View style={styles.friends}>
                {friends.map((f, i) =>
                    <Image style={styles.image} key={i} source={{
                        height: 75,
                        width: 75,
                        uri: f.image
                    }} />)}
                <Button title='Show all' />
            </View>


            <View>
                <Text>Sports</Text>
                {userusersport.map((s,i)=> <View key={i} style={styles.sports} ><Text>{s}</Text></View> )}
                
            </View>

            <ScrollView>
                <View>
                    <Text>Events</Text>

                    <View style={styles.friends} >
                        <Image style={styles.image}
                            source={{
                                height: 25,
                                width: 25,
                                uri: "https://picsum.photos/200/300"
                            }}
                        /><Text>Sport at address, City, date</Text>
                    </View>


                    <View style={styles.friends} >
                        <Image style={styles.image}
                            source={{
                                height: 25,
                                width: 25,
                                uri: "https://picsum.photos/200/300"
                            }}
                        /><Text>Sport at address, City, date</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );

}))

const friends = [{ image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
    , { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
]

const  userusersport =  [
    "Boxing",
    "Swimming"
]

const useruser = {
    "first": "mohamad",
    "last": "ali",
    "email": "Doit@aliSports.com",
    "city": "Tel Aviv",
    "country": "Israel",
    "birthdate": 110980,
    "mobile": "0500500509",
    "image": "https://picsum.photos/200/300",
    "gender": 1,
    "active": 1,
    "date": 266678
}

const events = [
    {
        "id": 4,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "active": 1,
        "address": null,
        "latitude": null,
        "longitude": null,
        "city": "Taybe",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football"
    },
    {
        "id": 6,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "shoul be ready to receive participants",
        "active": 0,
        "address": "Park Gordon",
        "latitude": 1611001784558,
        "longitude": 1611001784558,
        "city": "Tel Aviv",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football"
    }
]


export default ProfilePage