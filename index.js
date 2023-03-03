const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');


require('dotenv').config()

const homeTitle = "Welcome | Emre Turan ";
const aboutTitle = "About | Emre Turan ";
const contactTitle = "Let's Talk ";
const workTitle = "Work | Emre Turan ";

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home' , {page:'home', title: homeTitle});
})

app.get('/about', (req, res) => {
    res.render('about' , {page:'about', title: aboutTitle });
})

app.get('/contact', (req, res) => {
    res.render('contact' , {page:'contact', title: contactTitle});
})

app.get('/work', (req, res) => {
    res.render('work' , {page:'work', title: workTitle});
})





app.listen(process.env.PORT, () => {
    console.log('Server running on port 3000');
});


