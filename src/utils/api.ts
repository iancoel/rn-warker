import axios from 'axios';

// const login = {
//   user: 'Marco Poc',
//   token: '894|rT1dmwEZCPhptuXzMKUDIuDFH5sK2gVTpnZHK3wJ',
// };

const api = axios.create({
  baseURL: 'https://warker-api.herokuapp.com/',
  headers: {
    Authorization: 'Bearer ' + '894|rT1dmwEZCPhptuXzMKUDIuDFH5sK2gVTpnZHK3wJ',
  },
});

export default api;
