const { default: Axios } = require('axios');

const sugokuApi = Axios.create({
  baseURL: 'https://sugoku.herokuapp.com',
});

export default sugokuApi;
