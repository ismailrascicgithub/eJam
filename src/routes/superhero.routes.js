const express = require('express');
const router = express.Router();
const SuperheroController = require('../controllers/superhero.controller');
const validateSuperhero = require('../middlewares/validateSuperhero');

router.post('/superheroes', validateSuperhero, SuperheroController.addSuperhero);
router.get('/superheroes', SuperheroController.getSuperheroes);

module.exports = router;
