import { inject, observer } from 'mobx-react';
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Button,
    TouchableHighlight,
    Text
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AppHeader from './subComponent/AppHeader';




const EventsMap = inject('inputsStore', 'user', 'navigator')(observer((props) => {
    const { events } = props.user
    // const camera = {
    //     center: {
    //         latitude: props.event.latitude,
    //         longitude: props.event.longitude,
    //     },
    //     pitch: 1,
    //     heading: 1,
    //     altitude: 1,
    //     zoom: 10

    // }

    return (
        <View style={styles.container}>
            <View style={{
                width:'100%',
                position:'absolute',
                zIndex:9999
            }}>

            <AppHeader viewMapBtn={false} viewLogoutBtn={false}/>
            </View>
          <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE}
                // ref={map => _map = map}
                
                showsUserLocation={true}
                style={styles.map}
                // initialRegion={props.event}
                // initialCamera={camera} 
                >

                {events.map((p, index) => {
                    const markerTA = {
                        latitude: p.latitude,
                        longitude: p.longitude,
                        latitudeDelta: p.latitude,
                        longitudeDelta: p.longitude
                    }
                    
                    return <Marker
                    key={index}
                    coordinate={markerTA}
                    title={p.sport}
                    description={p.description}
                    
                    />
                })}

            </MapView>
                </View>
        </View>
    );
}))
export default EventsMap
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
                                        // <TouchableHighlight style={{
                                        //     position:'absolute',
                                        //     top:40,
                                        //     left:20,
                                        //     zIndex:9999
                                        // }}
                                        // onPress={()=>console.log('close map')}
                                        // >
                                        //     <View style = {{
                                        //         width: 100,
                                        //         height:50,
                                        //         position:'absolute',
                                        //         backgroundColor:'rgba(255,255,255,0.6)',
                                        //         alignItems:'center',
                                        //         justifyContent:'center'
                            
                                        //     }}>
                                        //         <Text style={{
                                        //             fontSize: 20
                                        //         }}> Back</Text>
                                        //     </View>
                                        // </TouchableHighlight>