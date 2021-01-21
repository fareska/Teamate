import React from 'react'
import { View,Text } from 'react-native'
import { styles as webStyles } from '../../styles/web/App'
import { styles as mobileStyles } from '../../styles/mobile/App'
import { inject, observer } from 'mobx-react'

const styles = mobileStyles

const AppHeader = inject('navigator')(observer(({ navigator }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>TeaMate</Text>
            
        </View>
    )
}))
 
export default AppHeader
