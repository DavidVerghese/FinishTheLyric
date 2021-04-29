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
  let temporaryValue = null
  let randomIndex = null
  let i = 0;
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
const scoreCounterBr = document.createElement('br');
const scoreCounterHr = document.createElement('hr');
const scoreCounter = document.createElement('h2');
scoreCounter.innerText = `FINAL SCORE: ${scoreValue}/15`;
const finalScoreAttacher = document.querySelector('#finalScore')

// creating the HTML elements for the rank 
const finalRank = document.createElement('h2');
finalRank.innerText = `Rank: ${rankValue}`;

finalScoreAttacher.append(scoreCounterBr);
finalScoreAttacher.append(scoreCounterHr);
finalScoreAttacher.append(scoreCounter);
finalScoreAttacher.append(finalRank);

// the function that creates the start screen 

// function startScreen() {
//   const displayGif = document.createElement('img')
//   displayGif.setAttribute('src', `https://media2.giphy.com/media/l41lGtNHF5etg5B0Q/giphy.gif`)
//   introScreen.append(displayGif)
//   const introText = document.createElement('p')
//   introText.innerText = `Are you ready to test your music trivia knowledge?`
//   const introSecondLine = document.createElement('p')
//   introSecondLine.innerText = `Scroll down to start`
//   introSecondLine.style.fontSize = '28px';
//   introSecondLine.style.fontStyle = 'italic';
//   introScreen.append(introText)
//   introScreen.append(introSecondLine)
// }

const lyricsFiller = `Something in the way she moves Attracts me like no other lover Something in the way she woos me I don't want to leave her now You know I believe her now Somewhere in her smile she knows That I don't need no other lover Something in her style that shows me Don't want to leave her now You know I believe her now You're asking me will my love grow I don't know, I don't know You stick around now it may show I don't know, I don't know Something in the way she knows And all I have to do is think of her Something in the things she shows me Don't want to leave her now You know I believe her now`;

// the function that creates the ten questions 

async function finishTheLyric(artist, song, a, b, c, d, imageWidth, wrongAnswersArray, divContainer, gif, id1, id2, correctSoundId, wrongSoundId, e, f, questionNumber) {
  console.log(artist, questionNumber);
  //getting the data from the API
  let clickValue = 0;

  // const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)

  //const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  // console.log(response);
  try {

    // const brSpacing = document.createElement('br')
    // divContainer.append(brSpacing)
    // const hrLine = document.createElement('hr')
    // divContainer.append(hrLine)
    const answerResponse = document.createElement('p')
    answerResponse.innerText = ''



    // selecting which parts of the lyrics we want to append to the DOM 

    // const lyrics = response.data.result.track.text
    const lyrics = lyricsFiller;

    // let firstLine = ''
    // for (i = a; i < b; i++) {
    //   firstLine += lyrics[i]
    // }
    let firstLine = e;
    // let firstWord = ''
    // for (r = c; r < d; r++) {
    //   firstWord += lyrics[r]
    // }
    let firstWord = f;
    const musicianObject = {
      prompt: firstLine + '...',
      correctAnswer: firstWord,
      wrongAnswers: wrongAnswersArray
    }

    // creating the title, gif, etc 

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
          // adding in the green border and check mark 
          // if the user picks the right answer
  

          // document.querySelector(id1).style.display = "inline"
          // document.querySelector(id2).style.display = "none"

          // displaying text congratulating the user
          // on picking the right answer
        
        //  rightAnswer.setAttribute('class', 'rightanswerdisplay');
         // wrongAnswerPic.setAttribute('class', 'wronganswernodisplay');

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
            var correctAnswerSound = document.getElementById(correctSoundId);
            correctAnswerSound.volume = 0.6;
            correctAnswerSound.play();

            // displaying the user's rank 
            // based on my personal ranking system 

            if (scoreValue > 5 & scoreValue < 10) {
              let rankValue = 'Music plebian'
              finalRank.innerText = `Rank: ${rankValue}`;
            }
            else if (scoreValue > 10 & scoreValue < 13) {
              let rankValue = 'Music connoisseur'
              finalRank.innerText = `Rank: ${rankValue}`;
            }
            else if (scoreValue > 13) {
              let rankValue = 'Music expert'
              finalRank.innerText = `Rank: ${rankValue}`;
            }

          }

        })
      }
      else if (numbers2[x] == 1) {
        oneAnswer.innerText = musicianObject.wrongAnswers[0]
        quiz.append(oneAnswer)
        oneAnswer.addEventListener("click", function () {

          // adding in the red border and x mark 
          // if the user picks the wrong answer

       

          // document.querySelector(id2).style.display = "inline"
          // document.querySelector(id1).style.display = "none"

          // display text correcting the user

      
       //   wrongAnswerPic.setAttribute('class', 'wronganswerdisplay');
        //  rightAnswer.setAttribute('class', 'rightanswernodisplay');

        

    

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
          var wrongAnswerSound = document.getElementById(wrongSoundId);
          wrongAnswerSound.volume = 0.9;
          wrongAnswerSound.play();

          }

        })
      }
      else if (numbers2[x] == 2) {
        twoAnswer.innerText = musicianObject.wrongAnswers[1]
        quiz.append(twoAnswer)
        twoAnswer.addEventListener("click", function () {



          // document.querySelector(id2).style.display = "inline"
          // document.querySelector(id1).style.display = "none"

        //   instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
        //  // instruction.style.color = `#c67561`
        //  instruction.style.color = `white`
        //  instruction.style.backgroundColor = `red`
        //   instruction.style.fontSize = '30px';
        //   displayMusic.innerText = ''
        //  wrongAnswerPic.setAttribute('class', 'wronganswerdisplay');
        //  rightAnswer.setAttribute('class', 'rightanswernodisplay');



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

            var wrongAnswerSound = document.getElementById(wrongSoundId);
            wrongAnswerSound.volume = 0.9;
            wrongAnswerSound.play();

          }

        })
      }
      else {
        threeAnswer.innerText = musicianObject.wrongAnswers[2]
        quiz.append(threeAnswer)
        threeAnswer.addEventListener("click", function () {



          // document.querySelector(id2).style.display = "inline"
          // document.querySelector(id1).style.display = "none"

          // instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
          // // instruction.style.color = `#c67561`
          // instruction.style.color = `white`
          // instruction.style.fontSize = '30px';
          // instruction.style.backgroundColor = `red`
          // displayMusic.innerText = ''
       //   wrongAnswerPic.setAttribute('class', 'wronganswerdisplay');
         // rightAnswer.setAttribute('class', 'rightanswernodisplay');

  

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

            var wrongAnswerSound = document.getElementById(wrongSoundId);
            wrongAnswerSound.volume = 0.9;
            wrongAnswerSound.play();

          }
        })
      }
    }

    // const answersDiv = document.createElement('div');
    // leftDiv.append(answersDiv);

    // const wrongAnswerPic = document.createElement('img');
    // wrongAnswerPic.setAttribute('src', 'https://media0.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif?cid=ecf05e472sn4rh3tsp6kigassffhy0lfmmqnzntr7qtlatpe&rid=giphy.gif&ct=g');
    // wrongAnswerPic.setAttribute('class', 'wronganswer');
    // leftDiv.append(wrongAnswerPic);

    // const wrongAnswerMessage = document.createElement('p');
    // wrongAnswerMessage.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`;
    // leftDiv.append(wrongAnswerMessage);
    
    // const rightAnswer = document.createElement('img');
    // rightAnswer.setAttribute('src', `https://media3.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.gif?cid=ecf05e47zytv3a9k3uz1smkjwccz2xcv2ubisicyds0xoq9h&rid=giphy.gif&ct=g`);
    // rightAnswer.setAttribute('class', 'rightanswer');
    // leftDiv.append(rightAnswer);

    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('class', 'right-side-question');

    divContainer.append(rightDiv);

    const displayGif = document.createElement('img')
    // displayGif.style.maxWidth = '70%';
    displayGif.setAttribute('src', gif)
    rightDiv.append(displayGif)
  }
  catch (error) {
    console.log("error!")
  }
}


const questionOrderSorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const questionOrder = shuffle(questionOrderSorted);
const parentDivOrder = [attach, attach2, attach3, attach4, attach5, attach6, attach7, attach8, attach9, attach10, attach11, attach12, attach13, attach14, attach15];
const divOrder = [musicDiv, musicDiv2, musicDiv3, musicDiv4, musicDiv5, musicDiv6, musicDiv7, musicDiv8, musicDiv9, musicDiv10, musicDiv11, musicDiv12, musicDiv13, musicDiv14, musicDiv15]
const rightAnswer = ['#q1Right', '#q2Right', '#q3Right', '#q4Right', '#q5Right', '#q6Right', '#q7Right', '#q8Right', '#q9Right', '#q10Right', '#q11Right', '#q12Right', '#q13Right', '#q14Right', '#q15Right']
const wrongAnswer = ['#q1Wrong', '#q2Wrong', '#q3Wrong', '#q4Wrong', '#q5Wrong', '#q6Wrong', '#q7Wrong', '#q8Wrong', '#q9Wrong', '#q10Wrong', '#q11Wrong', '#q12Wrong', '#q13Wrong', '#q14Wrong', '#q15Wrong']


// running each of the 10 functions, and assigning them to a random 
// div (The div controls the position on the webpage. Eg musicDiv2 means it
// will the be the second question, musicDiv3 means it will be the third, etc)

for (c = 0; c < questionOrder.length; c++) {
  //console.log(questionOrder, c, questionOrder.indexOf(c));
  let questionOrderP = parentDivOrder.indexOf(divOrder[questionOrder[c]].parentElement)
  if (c === 0) {

    finishTheLyric('Beatles', 'Penny Lane', 0, 36, 37, 48, '450px', ['his photo collection', 'haircuts', 'paintings'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/SQFoY6QupT5V6/giphy.gif?cid=ecf05e47thqni4iz9zmuw8lwdmu9mwfpxfovg3sxrxc0na4n&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound0", "wrongSound0", `In Penny Lane there is a barber showing`,`photographs`, questionOrderP)
  }
  else if (c === 1) {
    finishTheLyric('Nirvana', 'Smells Like Teen Spirit', 287, 334, 334, 345, '400px', ['outrageous', `sagacious`, `cretaceous`], divOrder[questionOrder[c]], "https://64.media.tumblr.com/8944ac37eb01f195b2f1c99634376830/tumblr_mhk457ePzS1rn29sdo1_500.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound1", "wrongSound1", `Here we are now, entertain us
    I feel stupid and`,`contagious`, questionOrderP)
  }
  else if (c === 2) {
    finishTheLyric('Drake', `God's Plan`, 539, 555, 556, 567, '450px', ['Westeros', 'Old Town Road', 'Westville Road'], divOrder[questionOrder[c]], "https://media4.giphy.com/media/3o85xosW6qQsCsZ3Ve/giphy.gif?cid=ecf05e4793d86e0ac4d7c3776f31f3445a8a54085c6ec850&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound2", "wrongSound2", `I finessed down`,`Weston Road`, questionOrderP)
  }
  else if (c === 3) {
    finishTheLyric('Bill Withers', `Lean On Me`, 259, 314, 314, 320, '350px', ['know', 'hide', 'steal'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/xT1R9KovfllTplpkkM/giphy.gif?cid=ecf05e47svkyzsudcvb54rzaakenout5d3044ucktmytrary&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound3", "wrongSound3", `Please swallow your pride
    If I have things you need to`,`borrow`, questionOrderP)
  }
  else if (c === 4) {
    finishTheLyric('Notorious B.I.G.', `Juicy`, 2534, 2601, 2602, 2614, '450px', ['afford this', 'configure this', 'repair this'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/AsDBIwyLjHc9G/giphy.gif?cid=ecf05e47nfxmozgja2q11hbcuuk9x47h0x4m6c0ojlx9v78v&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound4", "wrongSound4", `Super Nintendo, Sega Genesis
    When I was dead broke, man, I couldn't`,`picture this`, questionOrderP)
  }
  else if (c === 5) {
    finishTheLyric('Radiohead', `Karma Police`, 13, 42, 43, 49, '450px', ['riddles', 'French', 'stats'], divOrder[questionOrder[c]], "https://thumbs.gfycat.com/PoliticalAdmirableBird.webp", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound5", "wrongSound5", `Arrest this man
    He talks in`,`maths`, questionOrderP)
  }
  else if (c === 6) {
    finishTheLyric('Queen', `Bohemian Rhapsody`, 890, 966, 967, 975, '450px', ['fast Tango', 'waltz', 'flamenco'], divOrder[questionOrder[c]], "https://media4.giphy.com/media/YWlGAzJti8XIHamqKu/giphy.gif?cid=ecf05e476ilh3hbvzlfj4l354gwhcm6ag74x6f1vdg3hovtf&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound6", "wrongSound6", `Scaramouch, Scaramouch, will you do the`,`Fandango`, questionOrderP)
  }
  else if (c === 7) {
    finishTheLyric('Nas', `The World Is Yours`, 336, 361, 362, 368, '450px', ['Yanni', 'TV', 'the Simpsons'], divOrder[questionOrder[c]], "https://i.gifer.com/MnQZ.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound7", "wrongSound7", `I sip the Dom P, watching `,`Gandhi`, questionOrderP)
  }
  else if (c === 8) {
    finishTheLyric('The White Stripes', `Seven Nation Army`, 208, 247, 248, 258, '450px', ['paywall', 'brain fog', 'riddle'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/8cSaoSQ9Wokcq3Qm51/giphy.gif?cid=ecf05e473b341herv7lvxkr071enz16u7blrxqvqt3mfs4j2&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound8", "wrongSound8", `Back and forth through my mind
    Behind a`,`cigarette`, questionOrderP)
  }
  else if (c === 9) {
    finishTheLyric('Chris Stapleton', `Tennessee Whiskey`, 10, 42, 43, 50, '450px', ['library', 'jail cell', 'slump'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/BCe5xbtqwTh7NcmmR5/giphy.gif?cid=ecf05e470bb6e9f9f00a2666c21a87c05146b0085df4f6f9&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound9", "wrongSound9", `Used to spend my nights out in a`,`barroom`, questionOrderP)
  }
  else if (c === 10) {
    finishTheLyric('Bob Dylan', `Blowin' in the Wind`, 67, 130, 130, 135, '300px', ['blue whale', 'soft bed', 'nest'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/kpgzE7I82DNfO/giphy.gif?cid=ecf05e475h9l3cjbmyx4jfuto5pfhjh77hmjyp9whtkc3iuu&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound10", "wrongSound10", `How many seas must a white dove sail
    Before she sleeps in the`,`sand`, questionOrderP)
  }
  else if (c === 11) {
    finishTheLyric('Ed Sheeran', `Thinking Out Loud`, 833, 870, 870, 880, '450px', ['immortal', 'nonexistant', 'gold'], divOrder[questionOrder[c]], "https://media2.giphy.com/media/35yNLTW7Eba9ZuVtbh/giphy.gif?cid=ecf05e4756eff247fe03f8aa0d9d7065fc4a2aec39214b00&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound11", "wrongSound11", `Cause honey your soul can never grow old, it's`,`evergreen`, questionOrderP)
  }
  else if (c === 12) {
    finishTheLyric('Adele', `Rolling in the Deep`, 447, 484, 484, 495, '450px', ['bleeding', 'pained', 'drained'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/13vJHSyname1Hy/giphy.gif?cid=ecf05e475i7tkh57yz14gzd1fwmz4zabtoi8o85sweoe5l3p&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound12", "wrongSound12", `The scars of your love, they leave me`,`breathless`, questionOrderP)
  }
  // else if (c === 13) {
  //   finishTheLyric('Adele', `Rolling in the Deep`, 447, 484, 484, 495, '450px', ['bleeding', 'pained', 'drained'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/13vJHSyname1Hy/giphy.gif?cid=ecf05e475i7tkh57yz14gzd1fwmz4zabtoi8o85sweoe5l3p&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound12", "wrongSound12", "hi","hi")
  // }
  else if (c === 13) {
    finishTheLyric('Elvis Pressley', `Jailhouse Rock`, 45, 88, 88, 93, '450px', ['rock', 'fight', 'dance'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/2in9K8r6lnAPjPJNZt/giphy.gif?cid=ecf05e47zahlbq0nwwsrqe470oc2ltjs86eiswqxsedf7xn2&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound13", "wrongSound13", `The prison band was there, and they began to`,`wail`, questionOrderP)
  }
  else {
    finishTheLyric('Aretha Franklin', `Respect`, 92, 140, 140, 149, '450px', ['see me', 'hear me', 'get here'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/OjIM4Rgkv8gKj4KWku/giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]], "correctSound14", "wrongSound14", `All I'm askin'
    (Oo) Is for a little respect when you`,`get home`, questionOrderP)
  }
}

