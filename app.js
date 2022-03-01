const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require("mongodb");

// express app
const app = express();

// db
const dbName = "node-blog";

// connect to mongodb
const dbURI = 'mongodb+srv://weird:test123@learningnode.meubb.mongodb.net/nodeblog?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
const client = new MongoClient(dbURI)
client.connect()
 .then(result => {
   app.listen(3000)
 })
 .catch(err => console.log(err))

// register view engine
app.set('view engine', 'ejs');

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