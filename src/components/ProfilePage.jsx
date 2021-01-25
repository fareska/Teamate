import React, { useState } from 'react'
import { render } from 'react-dom'
import { View, Text, Image, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native'
// import { styles as webStyles } from '../styles/web/SignIn'
import { styles as mobileStyles } from '../styles/mobile/ProfilePage'
import { inject, observer } from 'mobx-react';
import SwipableView from './subComponent/SwipableView';

// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles

const ProfilePage = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator}) => {

    const [addFriendButton, setAddFriendButton] = useState(false)

    const {profile}= user

    console.log(profile);

    const add_friend = async () => {
        setAddFriendButton(true)
        console.log('Simple Button pressed')
        let data = { mainUserId: user.user.id, subUserId:profile.id }
        const res = await user.add_friend(data)
        // console.log(user);
        // console.log(res);
    }

    return (
        <SwipableView style={styles.container}>
            <Button title="Back" onPress={navigator.previous}/>
            <View>
                <Text>ProfilePage</Text>
                <Image source={{
                    width: 100,
                    height: 100,
                    uri: useruser.image
                }} />
                <Text>{profile.user.first} {profile.user.last} </Text>
                <Text>{profile.user.country}, {profile.user.city}</Text>
                <Text>{profile.user.birthdate}</Text>
                <Text>Bio, Say something</Text>

                 <Button
                        title="Add Friend"
                        disabled = {addFriendButton}
                        onPress={add_friend}
                        />
                 


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
                {profile.sport.map((s, i) => <View key={i} style={styles.sports} ><Text>{s}</Text></View>)}

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
            </SwipableView>


    );
    
}))



const friends = [{ image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
    , { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }, { image: 'https://picsum.photos/200/300', first: 'name', last: 'lastNAme' }
]

const userusersport = [
    "Boxing",
    "Swimming"
]

const useruser = {

    "user": {
        "first": "mohamad",
        "last": "ali",
        "email": "Doit@aliSports.com",
        "city": "Tel Aviv",
        "country": "Israel",
        "birthdate": 110980,
        "mobile": "0500500509",
        "image": null,
        "gender": 1,
        "active": 1,
        "date": 266678
    },
    "sport": [
        "Boxing",
        "Swimming"
    ],
    "match": [
        "1: a req was sent to the keyNum but did not approved yet",
        "4: a req was sent to the keyNum but did not approved yet",
        "7: a req received from the keyNum but did not approved yet",
        "15: a req received from the keyNum but did not approved yet",
        "18: a req received from the keyNum but did not approved yet",
        "20: friends",
        "22: friends"
    ],
    "events": [
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
    ],
    "Partis": [
        {
            "user_id": 27,
            "date": 0,
            "time": 0,
            "people_num": 5,
            "description": "best event ever",
            "active": 1,
            "address": "shufat",
            "latitude": 0,
            "longitude": 0,
            "city": "Jerusalem",
            "country": "American Samoa",
            "frequency": "oneTime",
            "sport": "Basketball"
        },
        {
            "user_id": 27,
            "date": 0,
            "time": 0,
            "people_num": 5,
            "description": "best event ever",
            "active": 1,
            "address": "shufat",
            "latitude": 0,
            "longitude": 0,
            "city": "Jerusalem",
            "country": "American Samoa",
            "frequency": "oneTime",
            "sport": "Basketball"
        },
        {
            "user_id": 4,
            "date": 1611001000000,
            "time": 1611001784558,
            "people_num": 3,
            "description": "waka WAKA",
            "active": 0,
            "address": "null",
            "latitude": null,
            "longitude": null,
            "city": "Taybe",
            "country": "Israel",
            "frequency": "weekly",
            "sport": "Football"
        },
        {
            "user_id": 21,
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
            "user_id": 4,
            "date": 1611001784558,
            "time": 1611001784558,
            "people_num": 3,
            "description": "waka WAKA",
            "active": 1,
            "address": "null",
            "latitude": null,
            "longitude": null,
            "city": "Taybe",
            "country": "Israel",
            "frequency": "weekly",
            "sport": "Football"
        }
    ]
}


const events = [
    {
        "id": 9,
        "date": 0,
        "time": 0,
        "people_num": 5,
        "description": "best event ever",
        "active": 1,
        "city": "Jerusalem",
        "country": "American Samoa",
        "frequency": "oneTime",
        "sport": "Basketball",
        "user_id": 27,
        "first": "rami",
        "last": "naser",
        "image": null,
        "address": "shufat",
        "latitude": 0,
        "longitude": 0,
        "partis": [
            {
                "pa_id": 27,
                "po_id": 9,
                "first": "rami",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 5,
                "po_id": 9,
                "first": "kender",
                "last": "bouino",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 9,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 21,
                "po_id": 9,
                "first": "mohamad",
                "last": "ali",
                "image": null
            },
            {
                "pa_id": 21,
                "po_id": 9,
                "first": "mohamad",
                "last": "ali",
                "image": null
            }
        ]
    },
    {
        "id": 10,
        "date": 0,
        "time": 0,
        "people_num": 4,
        "description": "Hzhshshshshshhshshshshsh",
        "active": 1,
        "city": "Sameera land",
        "country": "Azerbaijan",
        "frequency": "monthly",
        "sport": "Tennis",
        "user_id": 26,
        "first": "rami",
        "last": "naser",
        "image": null,
        "address": "Shshshsh",
        "latitude": 0,
        "longitude": 0,
        "partis": [
            {
                "pa_id": 27,
                "po_id": 10,
                "first": "rami",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 10,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 10,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 10,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            }
        ]
    },
    {
        "id": 11,
        "date": 0,
        "time": 0,
        "people_num": 1,
        "description": "Krav Maga is a military self-defence and fighting system developed for the Israel Defense Forces and Israeli security forces derived from a combination of techniques sourced from aikido, boxing, wrestling, judo, and karate. Krav Maga is known for its focus on real-world situations and its extreme efficiency.",
        "active": 1,
        "city": "Brussels",
        "country": "Belgium",
        "frequency": "daily",
        "sport": "Krav Magaa",
        "user_id": 27,
        "first": "rami",
        "last": "naser",
        "image": null,
        "address": "Brussels",
        "latitude": 0,
        "longitude": 0,
        "partis": []
    },
    {
        "id": 8,
        "date": 1611001000000,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "active": 0,
        "city": "Taybe",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football",
        "user_id": 4,
        "first": "kender",
        "last": "bouino",
        "image": null,
        "address": "null",
        "latitude": null,
        "longitude": null,
        "partis": [
            {
                "pa_id": 21,
                "po_id": 8,
                "first": "mohamad",
                "last": "ali",
                "image": null
            },
            {
                "pa_id": 22,
                "po_id": 8,
                "first": "rambo",
                "last": "Naser",
                "image": null
            },
            {
                "pa_id": 27,
                "po_id": 8,
                "first": "rami",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 9,
                "po_id": 8,
                "first": "kender",
                "last": "bouino",
                "image": null
            }
        ]
    },
    {
        "id": 4,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "active": 1,
        "city": "Taybe",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football",
        "user_id": 21,
        "first": "mohamad",
        "last": "ali",
        "image": null,
        "address": null,
        "latitude": null,
        "longitude": null,
        "partis": [
            {
                "pa_id": 27,
                "po_id": 4,
                "first": "rami",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 4,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 21,
                "po_id": 4,
                "first": "mohamad",
                "last": "ali",
                "image": null
            },
            {
                "pa_id": 9,
                "po_id": 4,
                "first": "kender",
                "last": "bouino",
                "image": null
            },
            {
                "pa_id": 10,
                "po_id": 4,
                "first": "kender",
                "last": "bouino",
                "image": null
            },
            {
                "pa_id": 17,
                "po_id": 4,
                "first": "kender",
                "last": "bouino",
                "image": null
            }
        ]
    },
    {
        "id": 5,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "active": 1,
        "city": "Tel Aviv",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football",
        "user_id": 22,
        "first": "rambo",
        "last": "Naser",
        "image": null,
        "address": "Park Gordon",
        "latitude": 1611001784558,
        "longitude": 1611001784558,
        "partis": [
            {
                "pa_id": 22,
                "po_id": 5,
                "first": "rambo",
                "last": "Naser",
                "image": null
            },
            {
                "pa_id": 27,
                "po_id": 5,
                "first": "rami",
                "last": "naser",
                "image": null
            },
            {
                "pa_id": 29,
                "po_id": 5,
                "first": "Ahmad",
                "last": "naser",
                "image": null
            }
        ]
    },
    {
        "id": 6,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "shoul be ready to receive participants",
        "active": 0,
        "city": "Tel Aviv",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football",
        "user_id": 21,
        "first": "mohamad",
        "last": "ali",
        "image": null,
        "address": "Park Gordon",
        "latitude": 1611001784558,
        "longitude": 1611001784558,
        "partis": [
            {
                "pa_id": 5,
                "po_id": 6,
                "first": "kender",
                "last": "bouino",
                "image": null
            },
            {
                "pa_id": 27,
                "po_id": 6,
                "first": "rami",
                "last": "naser",
                "image": null
            }
        ]
    },
    {
        "id": 7,
        "date": 1611001784558,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "active": 1,
        "city": "Taybe",
        "country": "Israel",
        "frequency": "weekly",
        "sport": "Football",
        "user_id": 4,
        "first": "kender",
        "last": "bouino",
        "image": null,
        "address": "null",
        "latitude": null,
        "longitude": null,
        "partis": [
            {
                "pa_id": 21,
                "po_id": 7,
                "first": "mohamad",
                "last": "ali",
                "image": null
            }
        ]
    }
]

export default ProfilePage