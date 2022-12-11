require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'pgimenez',
        title: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'pgimenez',
        title: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'pgimenez',
        title: 'Curso de node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});