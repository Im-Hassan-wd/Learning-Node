const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://weird:imhasssanwd@05@learningnode.meubb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI)

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'loream ipsum dolor si amet consectetur'},
    {title: 'Mario finds stars', snippet: 'loream ipsum dolor si amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'loream ipsum dolor si amet consectetur'}
  ];
  res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'about'});
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'create a new blog'});
})

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});