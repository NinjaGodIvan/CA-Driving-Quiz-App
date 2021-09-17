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

//Adding port 3000 to host the website
app.listen(3000, () => console.log("listening to port 3000"))

//Index routes
app.get('/', library.redirect_homepage)
app.get('/home', library.goto_homepage)
app.get('/home/:quiz_id', library.goto_quiz)
app.post('/home/:quiz_id', library.render_results)

//About route
app.get('/about', library.goto_about)

//Contacts route
app.get('/contacts', library.goto_contacts)

//Error route
app.use(library.goto_err)
