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
    //Gets quiz type and problem from the quiz file based on quiz id
    const {type, problems} = require(`./quizzes/${quiz_id}`)

    res.render('quiz', {title: 'Quiz', quiz_id, type, problems})
}

//Sends user to error page
const goto_err = (req, res) => {
    res.render('error', {title: 'Not Founded'})
}

//Handles user's input, compute the total score, and renders results page
const results_handler = (req, res) => {

    // console.log(req.params.quiz_id)
    // console.log(req.body)

    //Gets the quiz id from URL
    const quiz_id = req.params.quiz_id;
    //Gets problems from the quiz file based on quiz id
    const {problems} = require(`./quizzes/${quiz_id}`)

    //User's answers to the quiz
    const userInput = [
        req.body.answer1, req.body.answer2, req.body.answer3, 
        req.body.answer4, req.body.answer5, req.body.answer6,
        req.body.answer7, req.body.answer8, req.body.answer9,
        req.body.answer10
    ]

    //User's correct answer
    let correct = 0
    //Maximum score of the quiz
    const max_score = 10
    //Iterates through every answer from the problem
    let i = 0

    //Checks if the user's answers matches the correct answer
    userInput.forEach(answer => {
        if(answer == problems[i].answer){
            correct++
        }
        i++
    })

    //User's total score
    const userScore = correct / max_score;

    //Renders results page depending on the user's score
    if(userScore >= 0.8){
        res.render('results',{title: 'Passed!', image: '/images/passed.png', correct, max_score, message: 'Congratulations! You Passed!'})
    } else {
        res.render('results',{title: 'Failed', image: '/images/failed.png', correct, max_score, message: 'I\'m sorry but you failed. Please read the CA Handbook.'})
    }
}

module.exports = {
    goto_homepage, goto_about, goto_quiz, redirect_homepage, goto_err, results_handler
}

