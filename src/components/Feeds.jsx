import React from 'react'
import { Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { inject, observer } from 'mobx-react';
import SwipableScrollView from './subComponent/SwipableScrollView';
import AppHeader from './subComponent/AppHeader';
import EventFeed from './subComponent/EventFeed';
import { styles as webStyles } from '../styles/web/Feeds'
import { styles as mobileStyles } from '../styles/mobile/Feeds'
import { FloatingAction } from "react-native-floating-action";
const styles = mobileStyles



// const styles = (Platform.OS === "web") ? webStyles : mobileStyles



export const Feeds = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {

    return (
        <SwipableScrollView
            style={styles.feedsScrollable}
            contentContainerStyle={styles.feedsScrollableContainer} >
            <AppHeader />
 
            {user.events.map((f, i) => f.active && <EventFeed key={i} eventFeed={f} style={styles} />)}
            <View style={styles.footer}>
                <Text> feeds </Text>
            </View>
            <View style={styles.floatingContainer}>
                <FloatingAction />
            </View>
        </SwipableScrollView>
    )
})) 

const dummyFeeds = [
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    }, {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 2,
        "time": 1611001784558,
        "people_num": 3,
        "description": "TaybeCity Stadium",
        "date": 1611001784558,
        "active": 1
    },
    {
        "country": "Israel",
        "city": "Taybe",
        "frequency": "weekly",
        "sport": "Football",
        "id": 3,
        "time": 1611001784558,
        "people_num": 3,
        "description": "waka WAKA",
        "date": 1611001784558,
        "active": 1
    },
]