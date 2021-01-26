import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import SwipableScrollView from './subComponent/SwipableScrollView';
import AppHeader from './subComponent/AppHeader';
import EventFeed from './subComponent/EventFeed';
import { FloatingAction } from "react-native-floating-action";
import { styles as webStyles } from '../styles/web/Feeds'
import { styles as mobileStyles } from '../styles/mobile/Feeds'
import EventMenu from './subComponent/EventMenu';
import Loading from './subComponent/Loading';
import LoadingSkeleton from './subComponent/LoadingSkeleton';
const styles = mobileStyles
// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
export const Feeds = inject('navigator', 'user', 'inputsStore')(observer(({ user, navigator }) => {
    const openEventMenu = () => {
        navigator.showEventMenu()
    }
    const closeEventMenu = () => {
        navigator.hideEventMenu()
    }
    useEffect(() => {
        navigator.eventsLoading(true)
        user.get_events().then(() => {
            navigator.eventsLoading(false)
        })
    }, [])

    return (

        <View style={styles.mainFeedsContainer}>
            {navigator.isLoading ? <Loading /> : <View />}
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
                    <AppHeader viewMapBtn={true} viewLogoutBtn={true} viewBackButton={false} />
                    {navigator.isEventsLoading ? <LoadingSkeleton /> : <View />}
                    {user.events.map((f, i) => <EventFeed key={i} eventFeed={f} style={styles} />)}
                    <View style={styles.footer}>
                        <Text> feeds </Text>
                    </View>
                </SwipableScrollView>}
        </View>
    )
}))
