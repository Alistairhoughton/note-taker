const express = require('express');;
const apiRoute = require('./Routes/apiRoutes.js');
const htmlRoute = require('./Routes/htmlRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api',apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));