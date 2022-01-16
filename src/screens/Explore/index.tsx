import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Title, Container, CardContainer, CardHeader } from './styles';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Icon, Searchbar, Card, CardMedia, Button } from 'material-bread';
import cardBg from '../../assets/images/background-header-bg.png';
import avatar from '../../assets/images/avatar.png';
import userMarker from '../../assets/images/user-marker.png';
import api from '../../utils/api';
import { useState } from 'react';
import { posto, userLocation } from '../../interfaces';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [postos, setPostos] = useState<posto[]>([]);
  const [userLocation, setUserLocation] = useState<userLocation>();
  const [thirsty, setThirsty] = useState(false);
  const navigation: void | any = useNavigation();
  const handleChangeToFilter = () => {
    navigation.navigate('Filter');
  };

  //INSERIR GOOGLE MAPS API KEY
  const GOOGLE_MAPS_API_KEY = 'AIzaSyDhASgBa4aEwquBYPXgPq3GhzNiXhnUbK4';

  //puxar dados de todos os reservatórios
  useEffect(() => {
    api
      .get('api/posto')
      .then((response) => {
        setPostos(response.data.data);
      })
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, []);

  //puxa dados da localização do usuário
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Title>Explorar</Title>
      </Container>

      {/* Trocar long e lat da api */}
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: userLocation ? userLocation.longitude : -38.56945,
          latitude: userLocation ? userLocation.latitude : -3.77174,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Renderiza os markers de postos */}
        {postos.map((posto, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: +posto.coords.longitude,
              longitude: +posto.coords.latitude,
            }}
            title={`ID: ${posto.id}`}
            description={`Atualizado em ${new Date(
              posto.updated_at,
            ).getDate()}/${new Date(posto.updated_at).getMonth()}/${new Date(
              posto.updated_at,
            ).getFullYear()}`}
          />
        ))}

        {/* Renderiza o marker do usuário se possuir a localização */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: +userLocation?.latitude,
              longitude: +userLocation?.longitude,
            }}
            title="Usuário"
            description="Descrição do usuário"
          >
            <Image source={userMarker} style={{ height: 20, width: 20 }} />
          </Marker>
        )}

        {/* Direção para o botão 'Estou com sede!' */}
        {userLocation && thirsty && (
          <MapViewDirections
            origin={{
              latitude: +userLocation?.latitude,
              longitude: +userLocation?.longitude,
            }}
            destination={{
              longitude: +postos[1].coords.latitude,
              latitude: +postos[1].coords.longitude,
            }}
            apikey={GOOGLE_MAPS_API_KEY}
          />
        )}
      </MapView>

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
          onCloseIcon={handleChangeToFilter}
          closeIcon="filter-list"
        />
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: 115,
        }}
      >
        <Card style={{ width: 334, height: 194 }}>
          {/* Background */}
          <CardMedia
            image={
              <Image
                source={cardBg}
                style={{
                  width: '100%',
                  height: 120,
                  position: 'absolute',
                  top: 0,
                  resizeMode: 'cover',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            }
          />

          {/* Barra de avaliações e favoritos */}
          <View
            style={{
              width: '100%',
              paddingLeft: 20,
              paddingRight: 12,
              paddingTop: 10,
              position: 'absolute',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="star" size={24} color={'#FFB600'} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: '#FFFFFF',
                  marginLeft: 5,
                }}
              >
                5.0 (70+)
              </Text>
            </View>
            <Icon name="favorite" size={24} color={'#E12114'} />
          </View>

          {/* Avatar e título */}
          <View
            style={{
              width: '100%',
              position: 'absolute',
              top: 83,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Image
              source={avatar}
              style={{
                width: 74,
                height: 74,
                borderRadius: 37,
                borderColor: '#FDFDFD',
                borderWidth: 2,
              }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  color: '#F7F7F7',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginBottom: 15,
                }}
              >
                Posto do Wark
              </Text>
              <Text
                style={{ color: '#65696B', fontSize: 14, marginBottom: 10 }}
              >
                Salvamos você com gasolina
              </Text>
              <Text style={{ color: '#9AA0A1', fontSize: 12 }}>
                Garanta sua espada por R$ 9.99!
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: 32,
        }}
      >
        <Button
          text={'Estou com sede!'}
          type="flat"
          icon={<Icon name="local-gas-station" />}
          color={'#F44336'}
          style={{ width: 334, height: 50, paddingVertical: 15 }}
          onPress={() => setThirsty((prev) => !prev)}
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
