import { inject, observer } from 'mobx-react';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';




const map = inject('inputsStore', 'user')(observer((props) => {
  const { newEventForm, handleTextInput } = props.inputsStore
  const { events } = props.user
  const markerTA = {
    latitude: newEventForm.lat,
    longitude: newEventForm.lon,
    latitudeDelta: newEventForm.lat,
    longitudeDelta: newEventForm.lon
  }

  console.log(markerTA);
  const onMapClick = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    // console.log(e.nativeEvent.coordinate);
    handleTextInput('newEventForm', 'lon', longitude)
    handleTextInput('newEventForm', 'lat', latitude)
    // setMarkerTA(e.nativeEvent)
  }
  const camera = {
    center: {
      latitude: props.event.latitude,
      longitude: props.event.longitude,
    },
    pitch: 1,
    heading: 1,

    // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
    altitude: 1,

    // Only when using Google Maps.
    zoom: 10

  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => _map = map}
        onPress={onMapClick}
        showsUserLocation={true}
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
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});