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

//Renders the quiz file and sends user to the quiz (Still working on it)
const goto_quiz = (req, res) => {

    //Gets the quiz id from URL
    const quiz_id = req.params.quiz_id;
    //Gets the quiz file based on quiz id and deconstructs it
    const {quiz_type, quiz_list} = require(`./quizzes/${quiz_id}`)

    //console.log(quiz_type)

    //res.render('quiz', {title: 'Quiz', quiz_type, quiz_list})
}

//Sends user to error page
const goto_err = (req, res) => {
    res.render('error', {title: 'Not Founded'})
}

module.exports = {
    goto_homepage, goto_about, goto_quiz, redirect_homepage, goto_err
}

