const axios = require('axios');

const getClientData = async () => {
  const data = await axios.get('http://localhost:3000/1');
}

module.exports = {
  getClientData
  
}