const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const COSMOS_API_URL = 'https://cosmosodyssey.azurewebsites.net/api/v1.0/TravelPrices';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(COSMOS_API_URL);
    res.json(response.data);
  } catch (error) {
    console.error('Viga Cosmos API andmete toomisel:', error.message);
    res.status(500).json({ error: 'Serveri viga andmete toomisel' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy-server töötab: http://localhost:${PORT}`);
});
