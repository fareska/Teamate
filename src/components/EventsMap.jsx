import { inject, observer } from 'mobx-react';
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Button,
    TouchableHighlight,
    Text,
    Image
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, CalloutSubview, Callout } from 'react-native-maps';
import AppHeader from './subComponent/AppHeader';
import EventFeed from './subComponent/EventFeed';
import MapMarker from './subComponent/MapMarker';
import flag from '../../assets/flag.png'
import { styles as webStyles } from '../styles/web/Eventsmap'
import { styles as mobileStyles } from '../styles/mobile/Eventsmap'
import Loading from './subComponent/Loading';
const styles = mobileStyles




const EventsMap = inject('inputsStore', 'user', 'navigator')(observer((props) => {
    const { events } = props.user
    const [eventToShow, setEventToShow] = useState({})
    const [showEvent, setShowEvent] = useState(false)
    const { currentCoordinates } = props.user
    const location = { ...currentCoordinates }

    const camera = {
        center: location,
        pitch: 1,
        heading: 1,
        altitude: 1,
        zoom: 10

    }
    const showSelectedEvent = (target) => {
        setShowEvent(true)
        setEventToShow(target)

    }



    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                position: 'absolute',
                zIndex: 9999
            }}>
                {props.navigator.isLoading ? <Loading /> : <View />}


                <AppHeader viewMapBtn={false} viewLogoutBtn={false} viewBackButton={true} />
                
            </View>
            {showEvent ?
                <View style={styles.showEventContainer}>
                    <MapMarker eventFeed={eventToShow} setShowEvent={setShowEvent} />
                </View> : <View />}
            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    // ref={map => _map = map}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    style={styles.map}
                    initialCamera={camera}
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
                            onPress={() => showSelectedEvent(p)}

                        >

                            <Image source={flag} style={styles.flag} />
                        </Marker>
                        {/* <MapMarker eventFeed={p} key={index}/> */ }



                    })}

                </MapView>
            </View>
        </View>
    );
}))
export default EventsMap
