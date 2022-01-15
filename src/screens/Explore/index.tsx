import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Title, Container } from './styles';
import MapView from 'react-native-maps';
import { Searchbar } from 'material-bread';

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

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          top: 120,
        }}
      >
        <Searchbar
          style={{ width: '85%', position: 'relative', borderRadius: 5 }}
          placeholder="Encontre um posto e salve-se!"
          navigationIcon="search"
          closeIcon="filter-list"
        />
      </View>
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
