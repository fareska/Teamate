import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'

const SwipableView = inject('navigator')(observer(({ navigator, children, style }) => {
    let touchArrX = []
    let touchArrY = []
    const trackTouch = (e) => {
        touchArrX.push(e.nativeEvent.locationX)
        touchArrY.push(e.nativeEvent.locationY)
    }
    const handleReleaseTouch = (e) => {
        if (touchArrX[touchArrX.length - 1] - touchArrX[0] > 150) {
            navigator.previous()
            touchArrX = []
        } else {
            touchArrX = []
        }

        if (touchArrY[touchArrY.length - 1] - touchArrY[0] > 50) {
            Keyboard.dismiss()
            touchArrY = []
        } else {
            touchArrY = []
        }
    }
    return (
        <View style={style}
            onStartShouldSetResponder={(e) => true}
            onTouchStart={trackTouch}
            onResponderMove={trackTouch}
            onTouchMove={trackTouch}
            onMomentumScrollEnd={handleReleaseTouch}
            onResponderRelease={handleReleaseTouch}
            >
            
            {children}
            

        </View>
    )
}))

export default SwipableView
