let superheroes = [];

exports.addSuperhero = (hero) => {
    superheroes.push(hero);
};

exports.getAll = () => {
    return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
};
