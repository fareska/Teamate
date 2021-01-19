import { inject, observer } from 'mobx-react'
import React from 'react'
import { ScrollView, Keyboard } from 'react-native'

const SwipableScrollView = inject('navigator')(observer(({navigator,children,style,contentContainerStyle}) => {
    let touchArrX = []
    let touchArrY = []
    const trackTouch = (e) => {
        touchArrX.push(e.nativeEvent.locationX)
        touchArrY.push(e.nativeEvent.locationY)
    }
    const handleReleaseTouch = (e) => {
        
        if (touchArrX[touchArrX.length - 1] - touchArrX[0] > 100) {
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
         <ScrollView style={style}
          contentContainerStyle={contentContainerStyle}
            onStartShouldSetResponder={(e) => true}
            onTouchMove={trackTouch}
            onMomentumScrollEnd={handleReleaseTouch}
            onResponderRelease={handleReleaseTouch}
        >
            {children}
            </ScrollView>
    )
}))

export default SwipableScrollView
