const Joi = require('joi');

const superheroSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'Name is required.'
    }),
    superpower: Joi.string().trim().required().messages({
        'string.empty': 'Superpower is required.'
    }),
    humilityScore: Joi.number().integer().min(1).max(10).required().messages({
        'number.base': 'Humility score must be a number.',
        'number.min': 'Humility score must be at least 1.',
        'number.max': 'Humility score cannot be greater than 10.',
        'any.required': 'Humility score is required.'
    })
});

const validateSuperhero = (req, res, next) => {
    const { error } = superheroSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            errors: error.details.map(err => err.message)
        });
    }

    next();
};

module.exports = validateSuperhero;
