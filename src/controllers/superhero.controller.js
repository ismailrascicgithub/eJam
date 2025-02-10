const SuperheroService = require('../services/superhero.service');

exports.addSuperhero = (req, res) => {
    const { name, superpower, humilityScore } = req.body;

    const newHero = SuperheroService.addSuperhero(name, superpower, humilityScore);
    
    res.status(201).json(newHero); 
};

exports.getSuperheroes = (req, res) => {
    const superheroes = SuperheroService.getSuperheroes();
    res.status(200).json(superheroes);  
};
