import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles as webStyles } from '../../styles/web/Feed'
import { styles as mobileStyles } from '../../styles/mobile/Feed'
import { } from 'react-native-elements'
import profilIcon from '../../../assets/profileIcon.jpg'
const styles = mobileStyles
const EventFeed = inject('navigator')(observer(({ navigator, eventFeed }) => {
    const { id, time, date, description, country, city, frequency, sport, } = eventFeed
    return (
        <View style={styles.feedContainer}>
            <View style={styles.feedSubContainer}>
                <View style={styles.feedHeader}>
                    <Image source={profilIcon} style={styles.profileImage} />
                    <View >
                    <Text style={styles.feedTitle}>{sport}</Text>
                    </View>
                </View>
                <View style={styles.feedContent}>

                </View>
                <Text>{description}</Text>
                
                <Text>{`${city}, ${country}`}</Text>
                <Text>{"Date: " + new Date(date).toLocaleDateString()}</Text>
                <Text>{`Time: ${new Date(time).getHours()}:${new Date(time).getMinutes()} `}</Text>
                <Text>{`Recurrence: ${frequency}`}</Text>
                <TouchableOpacity onPress={() => console.log('touched')} style={styles.signUpBtn}>
                    <Text style={styles.sinUpBtnText}>
                        Ask to join
                         </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}))

export default EventFeed
