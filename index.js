const express = require('express');
const fetch = require('node-fetch');
const app = express();

// This endpoint returns Perpetual (Linear) contract market data
app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://api.bybit.com/v5/market/tickers?category=linear');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow public access
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Bybit API' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Proxy running at http://localhost:${port}`);
});