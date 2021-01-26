import { inject, observer } from 'mobx-react'
import React from 'react'
import { Dimensions } from 'react-native'
import { Image, View } from 'react-native'
import loading from '../../../assets/loading.gif'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Loading =inject('navigator')(observer(({navigator} ) => {
    return (
        <View style={{
            flex:1,
            width: windowWidth,
            height: windowHeight,
            position: 'absolute',
            top: navigator.currentPage ==='feeds'?90:-20,
            left: navigator.currentPage ==='feeds'?0:-20,
            right:0,
            bottom:0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999999,
            elevation: 99999999,
        }}>

            <Image source={loading} style={{ width: 0.2 * windowWidth, height: 0.2 * windowWidth }} />
       
        </View>
    )
}))

export default Loading
