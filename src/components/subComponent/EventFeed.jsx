import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles as webStyles } from '../../styles/web/Feed'
import { styles as mobileStyles } from '../../styles/mobile/Feed'
import { FloatingAction } from "react-native-floating-action";
import profilIcon from '../../../assets/profileIcon.jpg'
const styles = mobileStyles
const EventFeed = inject('navigator', 'user')(observer(({ navigator, eventFeed, user }) => {
    const { id, time, date, description, country, city, frequency, sport, partis,people_num } = eventFeed
    const askToJoin = async () => {
        const res = await user.askToJoin(user.user.id, id)
        console.log(res);
    }
    const showProfile =async ()=>{
        await user.get_profile_by_id(eventFeed.user_id)
        navigator.redirect('profilePage',eventFeed.user_id)
    }
    return (
        <View style={styles.feedContainer}>
            <View style={styles.feedSubContainer}>
                <TouchableOpacity onPress={showProfile}>

                <View style={styles.feedHeader}>
                    <Image source={profilIcon} style={styles.profileImage} />
                    <View >
                        <Text style={styles.feedTitle}>{sport}</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <View style={styles.feedContent}>

                </View>
                <Text>{description}</Text>

                <Text>{`${city}, ${country}`}</Text>
                <Text>{"Date: " + new Date(date).toLocaleDateString()}</Text>
                <Text>{`Time: ${new Date(time).getHours()}:${new Date(time).getMinutes()} `}</Text>
                <Text>{`Recurrence: ${frequency}`}</Text>
                <Text>{`Number of Participant: ${partis.length}/${people_num}`}</Text>
                <TouchableOpacity onPress={askToJoin} style={styles.signUpBtn}>
                    <Text style={styles.sinUpBtnText}>
                        Ask to join
                         </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}))

export default EventFeed
