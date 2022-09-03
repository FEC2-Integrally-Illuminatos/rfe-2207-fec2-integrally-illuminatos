const express = require('express')
const app = express();
const { queryParser } = require('express-query-parser')
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const auth = {headers: {Authorization: process.env.API_KEY}};
const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe";

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', (req, res, next) => {
  console.log('Received ' + req.method + ' request to ' + req.url);
  next();
});
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true
  })
)


//GET REQUESTS
app.get('/loading', (req, res) => {
  setTimeout(() => {
    res.sendStatus(200);
  }, 1000);
});


app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}`, {headers: {Authorization: process.env.API_KEY}})
    .then((prodData) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}/styles`, {headers: {Authorization: process.env.API_KEY}})
        .then((data) => {
          prodData.data.styles = data.data.results;
          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/`, {params: {product_id: req.query.product_id}, headers: {Authorization: process.env.API_KEY}} )
            .then((data) => {
              prodData.data.ratings = data.data.ratings;
              res.status(200).json(prodData.data);
            })
            .catch((err) => {
              res.sendStatus(401);
            })
        })
        .catch((err) => {
          res.sendStatus(401);
        })
     })
    .catch((err) => {
      res.sendStatus(401);
    });
})


app.get('/relatedProducts', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.productID}/related`, auth)
    .then((relatedProds) => {
      return relatedProds.data.map((product) => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product}`, auth);
      })
    })
    .catch(err => {console.log(err)})
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
  let config = {
    url: `${url}/reviews`,
    headers: {Authorization: process.env.API_KEY},
    params: req.query,
  }
  // console.log(req.query)
  // const params = req.query
  return axios(config)
  .then(result => res.send(result.data))
  .catch(err => {console.log(err)})
});

app.get('/questions/:id', (req, res) => {
  //TODO:
  let {id} = req.params;
  let {productID, count} = req.query;
  //if id is questions - GET ALL QUESTIONS 'qa/questions'
  if (id === 'all') {
    axios.get(`${url}/qa/questions`, {params: {'product_id': productID, count: count }, ...auth}).then((questions) => {
      let result = questions.data.results.sort((a, b) => {
        return b['question_helpfulness'] - a['question_helpfulness']
      });
      res.status(200).json(result)
    }).catch((err) => {
      console.log('Error getting questions: ', err)
    })
  } else {
    axios.get(`${url}/qa/questions/${id}/answers`, {params: {count: count}, ...auth}).then((answers) => {
      let result = answers.data.results.sort((a, b) => {
        return b.helpfulness - a.helpfulness
       });
      res.status(200).json(result)
    }).catch((err) => {
      console.log('Error getting answers: ', err)
    })
  }
});

app.get('/cart', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart`, {headers: {Authorization: process.env.API_KEY}})
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
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

app.post('/qa/questions/:id', (req, res) => {
  //TODO:
  let {id} = req.params;
  let {body, name, email, productID, questionID, photos} = req.body;
  console.log(questionID);
  let questionParams = {
    body: body,
    name: name,
    email: email,
    'product_id': productID
  };
  let answerParams = {
    body: body,
    name: name,
    email: email,
    photos: photos
  };
  if (id === 'questions') {
    axios.post(`${url}/qa/questions`, questionParams, auth).then(() => {
      res.status(201).send('Question posted');
    }).catch((err) => {
      console.log('Error posting a question: ', err);
    })
  } else if (id === 'answers') {
    axios.post(`${url}/qa/questions/${questionID}/answers`, answerParams, auth).then(() => {
      res.status(201).send('Answer posted');
    }).catch((err) => {
      console.log('Error posting an answer: ', err);
    })
  }
});

app.post('/cart', (req, res) => {
  let promises = [];
  for (let i = 0; i < parseInt(req.body.quantity); i++) {
    promises.push(axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart`, {sku_id: req.body.sku_id}, {headers: {Authorization: process.env.API_KEY}})
      .catch((err) => {
        console.log(err);
      }));
  };
  Promise.all(promises)
    .then(() => {
      res.status(201).send('added to cart!');
    })
    .catch((err) => {
      console.log(err);
    });
});

//PUT REQUESTS
app.put('/qa/questions/:id', (req, res) => {
  let {id} = req.params;
  let {questionId, answerId} = req.body;
  console.log(answerId);
  console.log(questionId)
  if (id === 'question_helpful') {
    axios.put(`${url}/qa/questions/${questionId}/helpful`, {}, auth).then(() => {
      res.status(204).send('Question marked as helpful');
    }).catch((err) => {
      console.log('Error marking question helpful: ', err);
    })
  } else if (id === 'question_report') {
    axios.put(`${url}/qa/questions/${questionId}/report`, {}, auth).then(() => {
      res.status(204).send('Question marked as reported');
    }).catch((err) => {
      console.log('Error reporting question: ', err);
    })
  } else if (id === 'answer_helpful') {
    axios.put(`${url}/qa/answers/${answerId}/helpful`, {}, auth).then(() => {
      res.status(204).send('Answer marked as helpful');
    }).catch((err) => {
      console.log('Error marking answer helpful: ', err);
    })
  } else if (id === 'answer_report') {
    axios.put(`${url}/qa/answers/${answerId}/report`, {}, auth).then(() => {
      res.status(204).send('Answer marked as reported');
    }).catch((err) => {
      console.log('Error reporting answer: ', err);
    })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})