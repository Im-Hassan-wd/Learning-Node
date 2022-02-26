const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'yoshi finds eggs', snippet: 'loream ipsum dolor si amet consectetur'},
    {title: 'yoshi finds eggs', snippet: 'loream ipsum dolor si amet consectetur'},
    {title: 'yoshi finds eggs', snippet: 'loream ipsum dolor si amet consectetur'}
  ]
  res.render('index', { title: 'Home'});
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