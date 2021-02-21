const express = require('express');
const stripe = require('stripe')('sk_test_51INPdhDbDWwWbKKCT9spif2NgGFlSQy7w3oDz7rODGBTokpmNGuLkpboa43BJoLV4506TnbvHzjkb49I9ltckS4A00ybxSFmZz');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

//Index Route
app.get('/', (req, res) => {
    res.render('index');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});