# Warker - React Native

Utiliza maps para mostrar localização do usuário, lista de postos cadastrados e o caminho a percorrer para o que estiver mais perto

## Funcionalidades

- Mapa
- Markers dos postos cadastrados na API
- Searchbar
- Filters
- Estou com sede (Indica posto mais próximo e caminho até ele)

## Instalação

Para utilizar este projeto, adicione sua chave da api do google maps no arquivo src/screens/Explore/index.tsx na linha #28 (o exemplo abaixo está desativado):

```bash
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBP_c1NZivCQQduKMIzg4rTjQ4RWWw-vzQ';
```

Após, rode:

```bash
  yarn install
  yarn start
```

## Libs utilizadas

- React
- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- React Native Maps
- React Native Maps Directions
- Styled Components
- Material Bread

## Melhorias

- [ ] Mais tipagens
- [ ] Testes unitários - RTL e Jest
- [ ] Redux para gerenciamento global dos filtros
- [ ] Estilo (retângulo de cor diferente no canto direito do header)
- [ ] Autenticação (com ou sem screen própria)

## Aprendizados

Sem dúvidas, projeto perfeito para aprender a utilizar o maps no React Native e também bibliotecas de estilo como Material Bread que facilitam um tanto para projetos pessoais.
