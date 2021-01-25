import React,{useEffect} from 'react'
import { Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { inject, observer } from 'mobx-react';
import SwipableScrollView from './subComponent/SwipableScrollView';
import SwipableView from './subComponent/SwipableView';
import AppHeader from './subComponent/AppHeader';
import EventFeed from './subComponent/EventFeed';
import { FloatingAction } from "react-native-floating-action";
import { styles as webStyles } from '../styles/web/Feeds'
import { styles as mobileStyles } from '../styles/mobile/Feeds'
import EventMenu from './subComponent/EventMenu';
const styles = mobileStyles



// const styles = (Platform.OS === "web") ? webStyles : mobileStyles



export const Feeds = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {
    const openEventMenu = () => {
        navigator.showEventMenu()
        console.log('open');
    }
    const closeEventMenu = () => {
        navigator.hideEventMenu()
        console.log('close');
    }
    useEffect(() => {
        user.get_events()
    }, []) 

    return (

        <View style={styles.mainFeedsContainer}>

             <TouchableOpacity style={styles.floatingContainer}>
                <View style={styles.androidFloating} />
                <FloatingAction overlayColor={null}
                    onOpen={openEventMenu}
                    onClose={closeEventMenu}
                />
            </TouchableOpacity>

            {navigator.EventMenu ? <EventMenu /> :
                <SwipableScrollView
                    style={styles.feedsScrollable}
                    contentContainerStyle={styles.feedsScrollableContainer} >
                    <AppHeader viewMapBtn={true} viewLogoutBtn={true}/>

                    {user.events.map((f, i) => <EventFeed key={i} eventFeed={f} style={styles} />)}
                    <View style={styles.footer}>
                        <Text> feeds </Text>
                    </View>
                </SwipableScrollView>} 
        </View>
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