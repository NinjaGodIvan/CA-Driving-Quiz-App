/** Runs the program and fires any event depending on the user's actions */

//Express App
const express = require('express')
const app = express()

//Apply files from 'public' folder
app.use(express.static('public'))
//For req body parsing
app.use(express.urlencoded({ extended: true }));

//Sets EJS Engine to enable JS templates
app.set('view engine', 'ejs')

//API Library containing routes
const library = require('./library')

//Adding port 3000 to open the website
app.listen(3000, () => console.log("listening to port 3000"))

app.get('/', library.goto_homepage)
app.get('/home', library.redirect_homepage)
app.get('/about', library.goto_about)
app.get('/quiz/:quiz_id', library.goto_quiz)

app.post('/results/:quiz_id', library.results_handler)

app.use(library.goto_err)
