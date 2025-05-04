const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://api.bybit.com/v5/market/tickers?category=linear');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching from Bybit:", error);
    res.status(500).json({
      error: 'Error fetching data from Bybit API',
      details: error.message || error.toString()
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Proxy running at http://localhost:${port}`);
});
