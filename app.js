// Creating the divs that the questions will go inside of

const introScreen = document.querySelector('#startScreen')

const attach = document.querySelector('#attach')
const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
attach.append(musicDiv)

const attach2 = document.querySelector('#attach2')
const musicDiv2 = document.createElement('div')
musicDiv2.setAttribute('class', 'music')
attach2.append(musicDiv2)

const attach3 = document.querySelector('#attach3')
const musicDiv3 = document.createElement('div')
musicDiv3.setAttribute('class', 'music')
attach3.append(musicDiv3)

const attach4 = document.querySelector('#attach4')
const musicDiv4 = document.createElement('div')
musicDiv4.setAttribute('class', 'music')
attach4.append(musicDiv4)

const attach5 = document.querySelector('#attach5')
const musicDiv5 = document.createElement('div')
musicDiv5.setAttribute('class', 'music')
attach5.append(musicDiv5)

const attach6 = document.querySelector('#attach6')
const musicDiv6 = document.createElement('div')
musicDiv6.setAttribute('class', 'music')
attach6.append(musicDiv6)

const attach7 = document.querySelector('#attach7')
const musicDiv7 = document.createElement('div')
musicDiv7.setAttribute('class', 'music')
attach7.append(musicDiv7)

const attach8 = document.querySelector('#attach8')
const musicDiv8 = document.createElement('div')
musicDiv8.setAttribute('class', 'music')
attach8.append(musicDiv8)

const attach9 = document.querySelector('#attach9')
const musicDiv9 = document.createElement('div')
musicDiv9.setAttribute('class', 'music')
attach9.append(musicDiv9)

const attach10 = document.querySelector('#attach10')
const musicDiv10 = document.createElement('div')
musicDiv10.setAttribute('class', 'music')
attach10.append(musicDiv10)

const attach11 = document.querySelector('#attach11')
const musicDiv11 = document.createElement('div')
musicDiv11.setAttribute('class', 'music')
attach11.append(musicDiv11)

const attach12 = document.querySelector('#attach12')
const musicDiv12 = document.createElement('div')
musicDiv12.setAttribute('class', 'music')
attach12.append(musicDiv12)

const attach13 = document.querySelector('#attach13')
const musicDiv13 = document.createElement('div')
musicDiv13.setAttribute('class', 'music')
attach13.append(musicDiv13)

const attach14 = document.querySelector('#attach14')
const musicDiv14 = document.createElement('div')
musicDiv14.setAttribute('class', 'music')
attach14.append(musicDiv14)

const attach15 = document.querySelector('#attach15')
const musicDiv15 = document.createElement('div')
musicDiv15.setAttribute('class', 'music')
attach15.append(musicDiv15)

// Creating the algorithim that creates a random array of numbers. 
// this controls the order of the multiple choice choices, and the order in which 
// questions appear on the page
// It goes through each number one at a time, and switches it out with a random 
// number
// This is based on the "shuffle card" function from 'high_low game' homework

function shuffle(list) {
  var shuffledList = list
  let currentIndex = list.length
  while (currentIndex != 0) {
    currentIndex -= 1
    let randomIndex = Math.floor(Math.random() * currentIndex)
    let temporaryValue = shuffledList[currentIndex]
    shuffledList[currentIndex] = shuffledList[randomIndex]
    shuffledList[randomIndex] = temporaryValue
  }
  newList = shuffledList
  let fiftyFifty = Math.random()
  if (fiftyFifty > 0.5) {
    newList = shuffledList.reverse()
  }
  return (newList)
}

// creating the HTML elements for the scoreCounter section  
let scoreValue = 0;
let rankValue = 'music ignoramus'
const finalScoreDiv = document.createElement('div');
finalScoreDiv.setAttribute('class','final-score-div')
const scoreCounter = document.createElement('h2');
scoreCounter.innerText = `FINAL SCORE: ${scoreValue}/15`;
const finalScoreAttacher = document.querySelector('#finalScore')

// creating the HTML elements for the rank 
const finalRank = document.createElement('h2');
finalRank.innerText = `Rank: ${rankValue}`;

finalScoreAttacher.append(finalScoreDiv);
const scoreGif = document.createElement('img')
scoreGif.setAttribute('src', `https://media0.giphy.com/media/kfpWSG2GPyvwll8t6T/giphy.gif?cid=ecf05e47d0mbfsu934hdrhofs3kf935bhh1i4kn4kdcdxlgo&rid=giphy.gif&ct=g`)
const finalScoreLeftDiv = document.createElement('div');
finalScoreLeftDiv.setAttribute('class', 'final-score-left-div');
const finalScoreRightDiv = document.createElement('div');
finalScoreRightDiv.setAttribute('class', 'final-score-right-div');

finalScoreDiv.append(finalScoreLeftDiv);
finalScoreLeftDiv.append(scoreGif);

finalScoreDiv.append(finalScoreRightDiv);
finalScoreRightDiv.append(scoreCounter);
finalScoreRightDiv.append(finalRank);


// the function that creates the ten questions 



function finishTheLyric( divContainer,  correctSoundId, wrongSoundId, questionNumber, apiData) {

  let artist = apiData.artist;
  let song = apiData.songTitle;
  let wrongAnswersArray = apiData.wrongAnswers;
  gif = apiData.imageAddress;
  let clickValue = 0;


    const answerResponse = document.createElement('p')
    answerResponse.innerText = ''

    let firstLine = apiData.lyric;
    let firstWord = apiData.answer;
    const musicianObject = {
      prompt: firstLine + '...',
      correctAnswer: firstWord,
      wrongAnswers: wrongAnswersArray
    }

    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('class', 'left-side-question');

    divContainer.append(leftDiv);

    const questionNumberPtag = document.createElement('h4');
    questionNumberPtag.innerText = (`Song ${questionNumber+1}:`);
    questionNumberPtag.setAttribute('class', 'question-number');
    leftDiv.append(questionNumberPtag);


    const displayTitle = document.createElement('h2');
    displayTitle.innerText = (`${artist}, ${song}`)
    leftDiv.append(displayTitle)

    const instructionsDiv = document.createElement('div');
    instructionsDiv.setAttribute('class','instructions-div')
    leftDiv.append(instructionsDiv);
      
    const instruction = document.createElement('p')
    instruction.innerText = `Finish the lyric: `;
    instructionsDiv.append(instruction);

    const wrongAnswerPic = document.createElement('img');
    wrongAnswerPic.setAttribute('src', 'https://media0.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif?cid=ecf05e472sn4rh3tsp6kigassffhy0lfmmqnzntr7qtlatpe&rid=giphy.gif&ct=g');
    wrongAnswerPic.setAttribute('class', 'wronganswernodisplay');
    instructionsDiv.append(wrongAnswerPic);

    const rightAnswer = document.createElement('img');
    rightAnswer.setAttribute('src', `https://media3.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.gif?cid=ecf05e47zytv3a9k3uz1smkjwccz2xcv2ubisicyds0xoq9h&rid=giphy.gif&ct=g`);
    rightAnswer.setAttribute('class', 'rightanswernodisplay');
    instructionsDiv.append(rightAnswer);

    const displayMusic = document.createElement('p')
    displayMusic.innerText = musicianObject.prompt
    instructionsDiv.append(displayMusic);

    const quiz = document.createElement('ul')

    const numbers = [0, 1, 2, 3]

    const numbers2 = shuffle(numbers)

    leftDiv.append(quiz)

    const zeroAnswer = document.createElement('li')
    const oneAnswer = document.createElement('li')
    const twoAnswer = document.createElement('li')
    const threeAnswer = document.createElement('li')

    // giving the list items created above a text with the 
    // correct or incorrect answer 
    // choice and appending them in a random order onto the DOM
    for (x = 0; x < numbers2.length; x++) {
      if (numbers2[x] == 0) {
        zeroAnswer.innerText = musicianObject.correctAnswer
        quiz.append(zeroAnswer)
        zeroAnswer.addEventListener("click", function () {
     

          // changing the score if the user picks the right answer
          if (clickValue === 0) {
            scoreValue = scoreValue + 1;
            scoreCounter.innerText = `FINAL SCORE: ${scoreValue}/15`;

            instruction.innerText = 'Good job!'
            instruction.style.color = `lightgreen`
            instruction.style.backgroundColor = ``
            instruction.style.fontSize = '30px';
            displayMusic.innerText = ''

            zeroAnswer.style.border = "10px solid green"
            oneAnswer.style.border = "0px solid green"
            twoAnswer.style.border = "0px solid green"
            threeAnswer.style.border = "0px solid green"

            clickValue += 1

            // playing a sound if the user picks the right answer
            // based on a code from this Stack Overflow question 
            // https://stackoverflow.com/questions/29567580/play-a-beep-sound-on-button-click
            // I have templorarily disabled this feature as it is glitching 
            // on the deployed site

            // let correctAnswerSound = document.getElementById(correctSoundId);
            // correctAnswerSound.volume = 0.6;
            // correctAnswerSound.play();

            // displaying the user's rank 
            // based on my personal ranking system 

            if (scoreValue > 5 & scoreValue < 10) {
              let rankValue = 'Music philistine'
              finalRank.innerText = `Rank: ${rankValue}`;
              scoreGif.setAttribute('src', `https://media0.giphy.com/media/uKWE6qMrVOEEg/giphy.gif?cid=790b7611a798ba0faeeacc76eb3c9dde9f059a089ad71953&rid=giphy.gif&ct=g`)
            }
            else if (scoreValue > 10 & scoreValue < 13) {
              let rankValue = 'Music connoisseur'
              finalRank.innerText = `Rank: ${rankValue}`;
              scoreGif.setAttribute('src', `https://media2.giphy.com/media/hD52jjb1kwmlO/giphy.gif?cid=ecf05e47h7x35p49n8lg3s9z0zfjnrnvq4a8wie0zn3g3m77&rid=giphy.gif&ct=g`);
            }
            else if (scoreValue > 13) {
              let rankValue = 'Music expert'
              finalRank.innerText = `Rank: ${rankValue}`;
              scoreGif.setAttribute('src', `https://media4.giphy.com/media/l41lFj8afmWIo3yW4/giphy.gif?cid=ecf05e470x81ek0xix35pk5bx6kfavs5jas9lsuzjmr1mrj8&rid=giphy.gif&ct=g`);
            }

          }

        })
      }
      else if (numbers2[x] == 1) {
        oneAnswer.innerText = musicianObject.wrongAnswers[0]
        quiz.append(oneAnswer)
        oneAnswer.addEventListener("click", function () {
        

    

          if (clickValue === 0) {
            instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
            instruction.style.backgroundColor = `red`
            instruction.style.color = `white`
             instruction.style.fontSize = '30px';
            displayMusic.innerText = ''
            
            oneAnswer.style.border = "10px solid red"
            zeroAnswer.style.border = "0px solid green"
            twoAnswer.style.border = "0px solid green"
            threeAnswer.style.border = "0px solid green"

            clickValue += 1

                  // playing a buzzer sound if the user picks the wrong sound
                     // I have templorarily disabled this feature as it is glitching 
            // on the deployed site
          // var wrongAnswerSound = document.getElementById(wrongSoundId);
          // wrongAnswerSound.volume = 0.9;
          // wrongAnswerSound.play();

          }

        })
      }
      else if (numbers2[x] == 2) {
        twoAnswer.innerText = musicianObject.wrongAnswers[1]
        quiz.append(twoAnswer)
        twoAnswer.addEventListener("click", function () {




          if (clickValue === 0) {
            instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
            instruction.style.backgroundColor = `red`
            instruction.style.color = `white`
             instruction.style.fontSize = '30px';
            displayMusic.innerText = ''
            
            twoAnswer.style.border = "10px solid red"
            zeroAnswer.style.border = "0px solid green"
            oneAnswer.style.border = "0px solid green"
            threeAnswer.style.border = "0px solid green"
            
            clickValue += 1

            // var wrongAnswerSound = document.getElementById(wrongSoundId);
            // wrongAnswerSound.volume = 0.9;
            // wrongAnswerSound.play();

          }

        })
      }
      else {
        threeAnswer.innerText = musicianObject.wrongAnswers[2]
        quiz.append(threeAnswer)
        threeAnswer.addEventListener("click", function () {
          if (clickValue === 0) {
            instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
            instruction.style.backgroundColor = `red`
            instruction.style.color = `white`
             instruction.style.fontSize = '30px';
            displayMusic.innerText = ''
            
            threeAnswer.style.border = "10px solid red"
            zeroAnswer.style.border = "0px solid green"
            oneAnswer.style.border = "0px solid green"
            twoAnswer.style.border = "0px solid green"

            clickValue += 1

            // var wrongAnswerSound = document.getElementById(wrongSoundId);
            // wrongAnswerSound.volume = 0.9;
            // wrongAnswerSound.play();

          }
        })
      }
    }



    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('class', 'right-side-question');

    divContainer.append(rightDiv);

    const displayGif = document.createElement('img');
    displayGif.setAttribute('src', gif)
  rightDiv.append(displayGif);
}


const questionOrderSorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const questionOrder = shuffle(questionOrderSorted);
const parentDivOrder = [attach, attach2, attach3, attach4, attach5, attach6, attach7, attach8, attach9, attach10, attach11, attach12, attach13, attach14, attach15];
const divOrder = [musicDiv, musicDiv2, musicDiv3, musicDiv4, musicDiv5, musicDiv6, musicDiv7, musicDiv8, musicDiv9, musicDiv10, musicDiv11, musicDiv12, musicDiv13, musicDiv14, musicDiv15]
const rightAnswer = ['#q1Right', '#q2Right', '#q3Right', '#q4Right', '#q5Right', '#q6Right', '#q7Right', '#q8Right', '#q9Right', '#q10Right', '#q11Right', '#q12Right', '#q13Right', '#q14Right', '#q15Right']
const wrongAnswer = ['#q1Wrong', '#q2Wrong', '#q3Wrong', '#q4Wrong', '#q5Wrong', '#q6Wrong', '#q7Wrong', '#q8Wrong', '#q9Wrong', '#q10Wrong', '#q11Wrong', '#q12Wrong', '#q13Wrong', '#q14Wrong', '#q15Wrong']


// running each of the 15 questions, and assigning them to a random 
// div (The div controls the position on the webpage. Eg musicDiv2 means it
// will the be the second question, musicDiv3 means it will be the third, etc)



async function getQuestions() {
  const response = await axios.get(`https://finishthelyricbackend.herokuapp.com/api/lyrics`);
  const data = response.data;
 
  for (c = 0; c < questionOrder.length; c++) {
    let questionOrderP = parentDivOrder.indexOf(divOrder[questionOrder[c]].parentElement)
    if (c === 0) {
      finishTheLyric(  divOrder[questionOrder[c]],  "correctSound7", "wrongSound7",  questionOrderP, data[0])
    }
    else if (c === 1) {
      finishTheLyric( divOrder[questionOrder[c]],  "correctSound4", "wrongSound4", questionOrderP, data[1])
    }
    else if (c === 2) {
      finishTheLyric( divOrder[questionOrder[c]],  "correctSound1", "wrongSound1", questionOrderP, data[2])
    }
    else if (c === 3) {
      finishTheLyric( divOrder[questionOrder[c]],  "correctSound10", "wrongSound10",  questionOrderP, data[3])
    }
    else if (c === 4) {
      finishTheLyric(  divOrder[questionOrder[c]],  "correctSound11", "wrongSound11",  questionOrderP, data[4])
    }
    else if (c === 5) {
      finishTheLyric(  divOrder[questionOrder[c]],   "correctSound9", "wrongSound9", questionOrderP, data[5])
    }
    else if (c === 6) {
      finishTheLyric(  divOrder[questionOrder[c]],   "correctSound0", "wrongSound0",  questionOrderP, data[6]);
    }
    else if (c === 7) {
      finishTheLyric(  divOrder[questionOrder[c]],   "correctSound6", "wrongSound6", questionOrderP, data[7])
    }
    else if (c===8){
      finishTheLyric( divOrder[questionOrder[c]],   "correctSound14", "wrongSound14", questionOrderP, data[8])
    }
    else if (c === 9) {
      finishTheLyric(  divOrder[questionOrder[c]],   "correctSound12", "wrongSound12", questionOrderP, data[9])
    }
    else if (c === 10) {
      finishTheLyric(  divOrder[questionOrder[c]],  "correctSound3", "wrongSound3",  questionOrderP, data[10])
    }
    else if (c === 11) {
      finishTheLyric( divOrder[questionOrder[c]],   "correctSound8", "wrongSound8",  questionOrderP, data[11])
    }
    else if (c === 12) {
      finishTheLyric(  divOrder[questionOrder[c]],  "correctSound5", "wrongSound5",  questionOrderP, data[12])
    }
    else if (c === 13) {
      finishTheLyric( divOrder[questionOrder[c]],  "correctSound2", "wrongSound2", questionOrderP, data[13])
    }
    else  {
      finishTheLyric(  divOrder[questionOrder[c]],  "correctSound13", "wrongSound13",  questionOrderP, data[14])
    }
  }
}
getQuestions();
