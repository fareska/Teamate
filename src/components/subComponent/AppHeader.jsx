import React from 'react'
import { View,Text, Button } from 'react-native'
import { styles as webStyles } from '../../styles/web/App'
import { styles as mobileStyles } from '../../styles/mobile/App'
import { inject, observer } from 'mobx-react'

const styles = mobileStyles

const AppHeader = inject('navigator','user')(observer(({ navigator,user }) => {
    const logoutHandler = ()=>{
        user.sign_out()
        navigator.redirect('signIn')
    }
    return (
        <View style={styles.header}>
            <Button title="Back" onPress={navigator.previous}/>
            <Button title="Log out" onPress={logoutHandler}/>
            <Text style={styles.headerTitle}>TeaMate</Text>
            
        </View>
    )
}))
 
export default AppHeader
