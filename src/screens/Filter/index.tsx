import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  ContentContainer,
  FilterContainer,
  FilterTitle,
  Title,
} from './style';
import {
  Checkbox,
  IconButton,
  Searchbar,
  Slider,
  Button,
} from 'material-bread';

const Filter = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <>
      <Container>
        <IconButton name="keyboard-arrow-left" size={24} />

        <Title>Filtro</Title>
      </Container>

      <ContentContainer>
        <FilterContainer>
          <FilterTitle>Pesquise por posto</FilterTitle>
          <Searchbar
            placeholder="Pesquisar"
            navigationIcon="search"
            style={{ width: 334, backgroundColor: '#F3F4F5', marginTop: 5 }}
          />
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Combustível</FilterTitle>
          <Checkbox
            label="Gasolina"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
          <Checkbox
            label="Álcool"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
          <Checkbox
            label="Diesel"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Nível do Reservatório</FilterTitle>
          <Checkbox
            label="Última gota"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
          <Checkbox
            label="Duas últimas gotas"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
          <Checkbox
            label="Cheio"
            checked={false}
            checkboxColor={'#B3B9BB'}
            labelStyle={{ fontSize: 16, color: '#B3B9BB' }}
          />
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Distância da minha localização</FilterTitle>
          <Slider
            value={sliderValue}
            sliderLength={334}
            onValueChange={setSliderValue}
            backgroundTrackColor="#00A3F4"
            trackColor="#CA5501"
            markerColor="#CA5501"
          />
        </FilterContainer>

        <Button
          text={'Ver resultados'}
          type="flat"
          color={'#F44336'}
          style={{
            width: 334,
            height: 50,
            paddingVertical: 15,
            marginBottom: 60,
          }}
        />
      </ContentContainer>
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({});
