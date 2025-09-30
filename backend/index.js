const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'data', 'prices.json');

// Simple endpoint to return all data
app.get('/api/prices', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({error: 'Unable to read data'});
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

// Endpoint to get crop by id and optional marketId
app.get('/api/crops/:cropId', (req, res) => {
  const { cropId } = req.params;
  const { marketId } = req.query;
  fs.readFile(DATA_PATH, 'utf8', (err, raw) => {
    if (err) return res.status(500).json({error: 'Unable to read data'});
    const data = JSON.parse(raw);
    const crop = data.crops.find(c => c.cropId === cropId);
    if (!crop) return res.status(404).json({error: 'Crop not found'});
    if (marketId) {
      const price = crop.prices.find(p => p.marketId === marketId);
      return res.json({ crop, price });
    }
    res.json({ crop });
  });
});

// Serve images (if you place images in backend/public/images)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Agri Price API listening on ${PORT}`));
