import React from 'react'
import { View, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import { styles as webStyles } from '../../styles/web/App'
import { styles as mobileStyles } from '../../styles/mobile/App'
import { inject, observer } from 'mobx-react'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/COLORS'
const { primary, secondary } = colors
const styles = mobileStyles

const AppHeader = inject('navigator', 'user')(observer(({ navigator, user, viewMapBtn, viewLogoutBtn, viewBackButton }) => {

    const logoutHandler = () => {
        user.sign_out()
        navigator.redirect('signIn')
    }
    return (
        <View style={styles.header}>
            {viewBackButton ? <TouchableOpacity
                style={styles.backButtonTouchable}
                onPress={navigator.previous}>
                <View>
                    <AntDesign name="leftcircleo" size={35} color={secondary} />
                </View>
            </TouchableOpacity> : <View />}

            <Text style={styles.headerTitle}>TeaMate</Text>
            {viewMapBtn ? <TouchableOpacity
                style={styles.logOutButtonTouchable}
                onPress={() => navigator.redirect('eventsMap')}
            >
                <View>
                    <Entypo name="map" size={35} color={secondary} />
                </View>
            </TouchableOpacity> : <View />}

            {viewLogoutBtn ? <TouchableOpacity
                style={styles.logOutButtonTouchable}
                onPress={logoutHandler}
            >
                <View>
                    <AntDesign name="logout" size={35} color={secondary} />
                </View>
            </TouchableOpacity> : <View />}

        </View>
    )
}))

export default AppHeader
