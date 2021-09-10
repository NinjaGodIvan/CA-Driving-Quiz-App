/************* API Library that handles the user's requests *************/

//Sends user to homepage
const goto_homepage = (req, res) => {
    res.render('home', {title: 'Home'})
}

//Sends user to the quiz
const goto_quiz = (req, res) => {

    //List of quiz JS files
    //const quiz = require(`./quizzes/${}`)


    //res.render('quiz', {title: Quiz, quiz}) --Not actual snippet
}

module.exports = {
    goto_homepage
}

