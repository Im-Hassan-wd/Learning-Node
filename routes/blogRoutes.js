const express = require('express');
const blogController = require('../controller/blogController')
const router = express.Router();

router.get('/', blogController.blog_index);

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

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

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