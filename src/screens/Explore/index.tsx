import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Container } from './styles';
import MapView from 'react-native-maps';

const Explore = () => {
  return (
    <>
      <Container>
        <Title>Explorar</Title>
      </Container>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  map: {
    flexDirection: 'row',
    flex: 1,
  },
});
