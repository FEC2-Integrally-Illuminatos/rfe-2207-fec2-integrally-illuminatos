const express = require('express')
const app = express();
const { queryParser } = require('express-query-parser')
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const headerOptions = {Authorization: process.env.API_KEY};
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
app.get('/products', (req, res) => {
  //TODO:

});

app.get('/relatedProducts', (req, res) => {
  //TODO:
});

app.get('/reviews', (req, res) => {
  //TODO:
});

app.get('/qa/questions/:id', (req, res) => {
  //TODO:
  let {id} = req.params;
  let {productID} = req.query;
  //if id is questions - GET ALL QUESTIONS 'qa/questions'
  if (id === 'all') {
    axios.get(`${url}/qa/questions`, {params: {'product_id': productID }, headers: headerOptions}).then((questions) => {
      res.status(200).json(questions.data)
    }).catch((err) => {
      console.log('Error getting questions: ', err)
    })
  } else {
    axios.get(`${url}/qa/questions/${id}/answers`, {headers: headerOptions}).then((answers) => {
      console.log(answers.data);
      res.status(200).json(answers.data)
    }).catch((err) => {
      console.log('Error getting answers: ', err)
    })
  }
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

app.post('/qa/questions/:id', (req, res) => {
  //TODO:
  let {id} = req.params;
  let {body, name, email, productID, questionID, photos} = req.body;
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
  if (!id) {
    axios.post(`${url}/qa/questions`, {params : questionParams, headers: headerOptions}).then(() => {
      res.status(201).send('Question posted');
    }).catch((err) => {
      console.log('Error posting a question: ', err);
    })
  } else if (id === 'answers') {
    axios.post(`${url}/qa/questions/${questionID}/answers`, {params : bodyParams, headers: headerOptions}).then(() => {
      res.status(201).send('Answer posted');
    }).catch((err) => {
      console.log('Error posting an answer: ', err);
    })
  }
});

app.post('/cart', (req, res) => {
  //TODO:
});

//PUT REQUESTS
app.put('/qa/questions/:id', (req, res) => {
  let {id} = req.params;
  let {questionId, answerId} = req.body;
  console.log(answerId)
  if (id === 'question_helpful') {
    axios.put(`${url}/qa/questions/${questionId}/helpful`, {headers: headerOptions}).then(() => {
      res.status(204).send('Question marked as helpful');
    }).catch((err) => {
      console.log('Error marking question helpful: ', err);
    })
  } else if (id === 'question_report') {
    axios.put(`${url}/qa/questions/${questionId}/report`, {headers: headerOptions}).then(() => {
      res.status(204).send('Question marked as reported');
    }).catch((err) => {
      console.log('Error reporting question: ', err);
    })
  } else if (id === 'answer_helpful') {
    axios.put(`${url}/qa/answers/${answerId}/helpful`, {}, {headers: headerOptions}).then(() => {
      res.status(204).send('Answer marked as helpful');
    }).catch((err) => {
      console.log('Error marking answer helpful: ', err);
    })
  } else if (id === 'answer_report') {
    axios.put(`${url}/qa/answers/${answerId}/report`, {headers: headerOptions}).then(() => {
      res.status(204).send('Answer marked as reported');
    }).catch((err) => {
      console.log('Error reporting answer: ', err);
    })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})