/************* API Library that handles the user's requests *************/

//Sends user to homepage
const goto_homepage = (req, res) => {
    res.render('home', {title: 'Home'})
}

//FIX
const redirect_homepage = (req, res) => {
    res.redirect('/home')
}

const goto_about = (req, res) => {
    res.render('about', {title: 'About'})
}

//Sends user to the quiz
const goto_quiz = (req, res) => {

    //List of quiz JS files
    //const quiz = require(`./quizzes/${}`)


    //res.render('quiz', {title: Quiz, quiz}) --Not actual snippet
}

module.exports = {
    goto_homepage, goto_about, redirect_homepage
}

