const SuperheroRepository = require('../repositories/superhero.repository');
const Superhero = require('../models/superhero.model');

exports.addSuperhero = (name, superpower, humilityScore) => {
    const newHero = new Superhero(name, superpower, humilityScore);
    SuperheroRepository.addSuperhero(newHero);
    return newHero;
};

exports.getSuperheroes = () => {
    return SuperheroRepository.getAll();
};
