const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', (req, res, next) => {
  console.log('Received ' + req.method + ' request to ' + req.url);
  next();
});

//GET REQUESTS
app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}`, {headers: {Authorization: process.env.API_KEY}})
    .then((prodData) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}/styles`, {headers: {Authorization: process.env.API_KEY}})
        .then((data) => {
          prodData.data.styles = data.data.results;
          res.status(200).json(prodData.data);
        })
        .catch((err) => {
          console.log(err);
        })
     })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/relatedProducts', (req, res) => {
  //TODO:
});

app.get('/reviews', (req, res) => {
  //TODO:
});

app.get('/qa', (req, res) => {
  //TODO:
});

app.get('/cart', (req, res) => {
  //TODO:
});


//POST REQUESTS

app.post('/interactions', (req, res) => {
  //TODO:
});

app.post('/relatedProducts', (req, res) => {
  //TODO:
});
app.post('/reviews', (req, res) => {
  //TODO:
});

app.post('/qa', (req, res) => {
  //TODO:
});

app.post('/cart', (req, res) => {
  //TODO:
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})