import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { styles as webStyles } from '../../styles/web/Feed'
import { styles as mobileStyles } from '../../styles/mobile/Feed'
import { FloatingAction } from "react-native-floating-action";
import profilIcon from '../../../assets/profileIcon.jpg'
import { PricingCard } from "react-native-elements";
import {colors} from '../../styles/COLORS'
const {primary,secondary} = colors
const styles = mobileStyles
const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
const EventFeed = inject('navigator', 'user')(observer(({ navigator, eventFeed, user,disableName,disablePartis }) => {
    const { id, time, date, description, country, city, frequency, sport, partis, people_num, first, last } = eventFeed
    const askToJoin = async () => {
        navigator.loading(true)
        const res = await user.askToJoin(user.user.id, id)
        if (res.data) {
            navigator.loading(false)
            alertMessage(res.data)
        }
    }
    const showProfile = async () => {
        navigator.loading(true)
        await user.get_profile_by_id(eventFeed.user_id)
        navigator.loading(false)
        navigator.redirect('profilePage', eventFeed.user_id)
    }
    return (
        <View style={styles.feedContainer}>

            <View style={styles.feedSubContainer}>
                {!disableName?<TouchableOpacity onPress={showProfile}>

                    <View style={styles.feedHeader}>
                        <Image source={profilIcon} style={styles.profileImage} />
                        <View >
                            <Text style={styles.feedTitle}>    {first} {last}</Text>
                        </View>
                    </View>

                </TouchableOpacity>:<View/>}

            <View style={styles.feedContent}>

                <PricingCard
                    button={{ title: "Lets TeaMate!" }}
                    color={secondary}
                    containerStyle={{width:'90%'}}
                    info={[
                        "Date: " + new Date(date).toLocaleDateString(),
                        `Time: ${new Date(time).toLocaleTimeString()} `,
                        `Recurrence: ${frequency}`,
                        `${city}, ${country}`
                    ]}
                    infoStyle={{}}
                    onButtonPress={askToJoin}
                    price={!disablePartis?`${partis.length}/${people_num}`:`${people_num}`}
                    pricingStyle={{ color:primary}}
                    title={sport}
                   
                    wrapperStyle={{ padding: 2 }}
                    />
                    </View>
            </View>
        </View>
    )
}))

export default EventFeed
