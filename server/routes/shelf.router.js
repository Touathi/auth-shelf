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
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  
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
