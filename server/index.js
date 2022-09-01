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

let auth = {headers: {Authorization: process.env.API_KEY}};

//GET REQUESTS
app.get('/products', (req, res) => {
  //TODO:
});

app.get('/relatedProducts', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.productID}/related`, auth)
    .then((relatedProds) => {
      return relatedProds.data.map((product) => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product}`, auth);
      })
    })
    .then(promiseArr => Promise.all(promiseArr)) //returns an array of objects with object.data being the prod information
    .then(products => {
      return products.map((product) => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.data.id}/styles`, auth)
        .then(response => {
          let thumbnail = response.data.results.filter(style => style['default?'])[0].photos[0].thumbnail_url;
          product.data.picture = thumbnail;
          return product.data;
        })
      })
    })
    .then(promises => Promise.all(promises).then(productArr => res.status(200).send(productArr)))
    .catch((err) => {
      console.log(err);
    });
});

app.get('/outfits', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.productID}`, auth)
  .then((product) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.productID}/styles`, auth)
    .then(styles => {
      let thumbnail = styles.data.results.filter(style => style['default?'])[0].photos[0].thumbnail_url;
      product.data.picture = thumbnail;
      res.status(200).send(product.data)
    })
  });
});

app.get('/storage', (req, res) => {
  let promiseArr = req.query.stored_IDs.map((id => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${~~id}`, auth);
  }));
  Promise.all(promiseArr)
  .then(products => {
    return products.map((product) => {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.data.id}/styles`, auth)
      .then(response => {
        let thumbnail = response.data.results.filter(style => style['default?'])[0].photos[0].thumbnail_url;
        product.data.picture = thumbnail;
        return product.data;
      })
    })
  })
  .then(promises => Promise.all(promises)
  .then(productArr => res.status(200).send(productArr)))
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