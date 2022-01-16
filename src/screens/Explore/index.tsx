import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Title, Container, CardContainer, CardHeader } from './styles';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Icon, Searchbar, Card, CardMedia, Button } from 'material-bread';
import cardBg from '../../assets/images/background-header-bg.png';
import avatar from '../../assets/images/avatar.png';

const Explore = () => {
  const navigation: void | any = useNavigation();
  const handleChangeToFilter = () => {
    navigation.navigate('Filter');
  };

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
