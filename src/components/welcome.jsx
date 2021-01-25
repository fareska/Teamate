import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, Button } from 'react-native'

const Welcome = inject("navigator",'user')(observer(({navigator, user}) => {
    return ( 
        <View on style={{
            flex:1, 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 20,
            }}>
                Welcome to TeaMate
            </Text>
        </View>
    )
}))

export default Welcome
