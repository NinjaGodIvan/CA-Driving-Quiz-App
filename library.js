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
    //Gets the quiz's name, its type and problem from the quiz file based on quiz id
    const {name, type, problems} = require(`./quizzes/${quiz_id}`)

    res.render('quiz', {title: name, type, problems, quiz_id})
}

//Sends user to error page
const goto_err = (req, res) => {
    res.render('error', {title: 'Uh Oh'})
}

//Handles user's input, compute the total score, and renders results page
const results_handler = (req, res) => {

    //Gets the quiz id from URL
    const quiz_id = req.params.quiz_id;
    //Gets problems from the quiz file based on quiz id
    const {problems} = require(`./quizzes/${quiz_id}`)
    //Array of user's answers
    const userAnswers = Object.entries(req.body)

    //User's correct answer
    let correct = 0
    //Maximum score of the quiz
    const max_score = userAnswers.length
    //Iterates through every answer from the problem
    let i = 0

    //Checks if the user's answers matches the correct answer
    userAnswers.forEach(([key, answer])=> {
        if(answer == problems[i].answer){
            correct++
        }
        i++
    })

    //Renders results page depending on the user's score
    if(correct / max_score >= 0.8){
        res.render('results',{title: 'Passed!', image: '/images/passed.png', correct, max_score, message: 'Congratulations! You Passed!'})
    } else {
        res.render('results',{title: 'Failed', image: '/images/failed.png', correct, max_score, message: 'Please review the CA Handbook.'})
    }
}

module.exports = {
    goto_homepage, goto_about, goto_quiz, redirect_homepage, goto_err, results_handler
}

