const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appRoutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(appRoutes);

app.listen(3000);