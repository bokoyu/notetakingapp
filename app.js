require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 5000 || process.env.PORT;

app.use(session({
    secret: 'billclinton',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))
app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({extender: true}));
app.use(express.json());

//db connect
connectDB();

//static
app.use(express.static('public'));

// templating

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const locals = {
        title: 'Notes',
        description: 'Free Notes App'
    }

    res.render('index', locals);
})

// routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/auth'));

// 404
app.get('*', function(req,res) {
    res.status(404).send('404 Page Not Found');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
