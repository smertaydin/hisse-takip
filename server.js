const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/getstockslist', async (req, res) => {
    try {
        const response = await axios.get(`http://bigpara.hurriyet.com.tr/api/v1/hisse/list`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching stock list');
    }
});

app.get('/getstock/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const response = await axios.get(`http://bigpara.hurriyet.com.tr/api/v1/borsa/hisseyuzeysel/${symbol}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching stock data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
