import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  width: 300px;
  flex-direction: row;
  align-items: center;
  padding: 15px 30px;
  background: #f7f7f7;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
`;

export const ContentContainer = styled.View`
  background: #ffffff;
  flex-direction: column;
  align-items: center;
`;

export const FilterContainer = styled.View`
  width: 334px;
  border-bottom-color: #ebeff0;
  border-bottom-width: 1px;
  padding: 30px 0 20px;
`;

export const FilterTitle = styled.Text`
  color: #3c3f40;
  font-size: 16px;
  font-weight: bold;
`;
