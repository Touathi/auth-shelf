const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf from data base
 * // if user is authenticated 
 */
router.get('/', (req, res) => {
  if(req.isAuthenticated()){
    console.log('is authenticated?', req.isAuthenticated())
    console.log('user', req.user)
    let queryText = 'SELECT * FROM "item"';
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log('error in get server', error)
      res.sendStatus(418)
    })
    

  }
  else {
    res.sendStatus(403)
  }
 
   // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  if(req.isAuthenticated()){
    console.log('is authenticated?', req.isAuthenticated())
    console.log('user', req.user)
    console.log('req.body:', req.body);
    let queryText = `INSERT INTO "item" ("description", "image_url")
    VALUES ($1, $2);`
    pool.query(queryText , [req.body.description , req.body.image])
    .then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.log('Error in post /Shelf.router' , err)
      res.sendStatus(500)
    })

  }else {
    res.sendStatus(403)
  }
});
/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  if(req.isAuthenticated()){
    let queryText = `DELETE FROM "item" where "id" = $1`
    pool.query(queryText, [req.params.id])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(error => {
      console.log('error deleting item', error)
      res.sendStatus(418)
    })
  }
  
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
