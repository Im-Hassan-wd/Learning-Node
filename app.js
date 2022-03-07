const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://weird:test123@learningnode.meubb.mongodb.net/nodeblog?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(eer))

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo snadbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
   .then(result => {
     res.send(result)
   })
   .catch(err => console.log(err));
})

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