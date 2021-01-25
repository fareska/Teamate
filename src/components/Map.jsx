import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const map = inject('inputsStore', 'user')(observer((props) => {
  const { newEventForm, handleTextInput } = props.inputsStore
  const {currentCoordinates} = props.user
  const location ={...currentCoordinates }
  const markerTA = {
    latitude: newEventForm.lat,
    longitude: newEventForm.lon,
    latitudeDelta: newEventForm.lat,
    longitudeDelta: newEventForm.lon
  }
  
  const onMapClick = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    handleTextInput('newEventForm', 'lon', longitude)
    handleTextInput('newEventForm', 'lat', latitude)
  }
  const camera = {
    center:location,
    pitch: 1,
    heading: 1,
    altitude: 1,
    zoom: 10
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        onPress={onMapClick}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        initialCamera={camera}

      >
        <Marker
          coordinate={markerTA}
          title={markerTA.title}
          description={markerTA.description}
        />
      </MapView>
    </View>
  );
}))
export default map
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  map: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

