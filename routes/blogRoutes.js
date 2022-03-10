const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  
});

router.post('/', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
   .then(result => {
     res.redirect('/')
   })
   .catch(err =>  {
     console.log(err);
   })
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'create a new blog'});
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findById(id)
   .then(result => {
     res.render('details', { blog: result, title: "Blog Details"})
   })
   .catch(err => {
     console.log(err);
   });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
   .then(result => {
     res.json({ redirect: '/'})
   })
   .catch(err => {
     console.log(err);
   });
});

module.exports = router;