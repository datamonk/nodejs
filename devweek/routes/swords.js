var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
module.exports = router

// DB Schmea
//[
//  {
//    "id": 3,
//    "type": "true",
//    "is_magical": true,
//    "attack": 3,
//    "sp_attack": 3
//   }
// ]

// GET
// curl -XGET "http://localhost:8080/api/swords/2"
// return all id's
router.get('/', function(req, res) {
  knex('swords').select('*').then(function(sword) {
    res.status(200).json(sword);
  });
})
// look for single id
router.get('/:id', function(req, res) {
  knex('swords').select('*').where({id: req.params.id}).then(function (sword) {
    res.status(200).json(sword);
  });
})

// POST
// curl -XPOST "http://localhost:8080/api/swords/$id"
router.post('/:id', function(req, res) {
  //knex('swords').insert(req.body).returning('*').then(function(sword) {
  knex('swords').insert(req.body).where({id: req.params.id}).returning('*').then(function (sword) {
    res.status(201).json(sword);
  });
})

// PUT
// curl -XPUT "http://localhost:8080/api/swords/$id"
router.put('/:id', function(req, res) {
  knex('swords').update(req.body).where({id: req.params.id}).returning('*').then(function (sword) {
    //res.json(sword)
    res.status(200).json(sword);
  });
})

// DELETE
// curl -XDELETE "http://localhost:8080/api/swords/$id"
router.delete('/:id', function(req, res) {
  knex('swords').delete(req.body).where({id: req.params.id}).returning('*').then(function (sword) {
    //res.json(sword)
    //send.status... to return the response code to the client
    res.status(200).json(sword);
  });
})
