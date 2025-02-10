const express = require('express');
const cors = require('cors');
const superheroRoutes = require('./routes/superhero.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', superheroRoutes);

app.get("/", (req, res) => {
    res.send("Humble Superhero Api");
});

module.exports = app;
