import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, Button } from 'react-native'

const Welcome = inject("navigator")(observer(({navigator}) => {
    return (
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>
                welcome to Teamate
            </Text>
            <Button title="Sign in"onPress={()=>navigator.redirect('signIn')}/>
        </View>
    )
}))

export default Welcome
