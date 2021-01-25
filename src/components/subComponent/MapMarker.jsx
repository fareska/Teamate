import { inject, observer } from 'mobx-react'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import flag from '../../../assets/flag.png'
import EventFeed from './EventFeed'
import { styles as webStyles } from '../../styles/web/Feed'
import { styles as mobileStyles } from '../../styles/mobile/Feed'
const styles = mobileStyles

const MapMarker = inject('navigator', 'user')(observer(({ navigator, eventFeed, user,setShowEvent }) => {
    return (   
                <View style={styles.markerEventContainer}>  
                <TouchableOpacity style={styles.closeBtn} onPress={()=>setShowEvent(false)}>
                    <View style={styles.closeBtnContainer}><Text style={styles.closeBtnTxt}>x</Text></View>
                    </TouchableOpacity>        
                    <EventFeed eventFeed={eventFeed} style={styles} />
                </View>

    )
}))

export default MapMarker
