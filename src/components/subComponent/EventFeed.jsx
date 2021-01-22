import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles as webStyles } from '../../styles/web/Feed'
import { styles as mobileStyles } from '../../styles/mobile/Feed'
import { FloatingAction } from "react-native-floating-action";

const styles = mobileStyles
const EventFeed = inject('navigator')(observer(({ navigator, eventFeed }) => {
    const { id, time, date, description, country, city, frequency, sport, } = eventFeed
    return (
        <View style={styles.feedContainer}>
            <Text>{sport}</Text>
            <Text>{`${city}, ${country}`}</Text>
            <Text>{"Date: " + new Date(date).toLocaleDateString()}</Text>
            <Text>{`Time: ${new Date(time).getHours()}:${new Date(time).getMinutes()} `}</Text>
            <Text>{`Recurrence: ${frequency}`}</Text>
            <Text>{description}</Text>
            <TouchableOpacity onPress={() => console.log('touched')} style={styles.signUpBtn}>
                <Text style={styles.sinUpBtnText}>
                    Ask to join  
                         </Text>
            </TouchableOpacity>
        </View>
    )
}))

export default EventFeed
