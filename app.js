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
const scoreCounterBr = document.createElement('br');
const scoreCounterHr = document.createElement('hr');
const scoreCounter = document.createElement('h2');
scoreCounter.innerText = `FINAL SCORE: ${scoreValue}/15`;
const finalScoreAttacher = document.querySelector('#finalScore')
finalScoreAttacher.append(scoreCounterBr);
finalScoreAttacher.append(scoreCounterHr);
finalScoreAttacher.append(scoreCounter);

// the function that creates the start screen 

function startScreen() {
  const displayGif = document.createElement('img')
  displayGif.setAttribute('src', `https://media2.giphy.com/media/l41lGtNHF5etg5B0Q/giphy.gif`)
  introScreen.append(displayGif)
  const introText = document.createElement('p')
  introText.innerText = `Are you ready to test your music trivia knowledge?`
  const introSecondLine = document.createElement('p')
  introSecondLine.innerText = `Scroll down to start`
  introSecondLine.style.fontSize = '23px';
  introSecondLine.style.fontStyle = 'italic';
  introScreen.append(introText)
  introScreen.append(introSecondLine)
}



// the function that creates the ten questions 

async function finishTheLyric(artist, song, a, b, c, d, imageWidth, wrongAnswersArray, divContainer, gif, id1, id2) {

  //getting the data from the API
  let clickValue = 0;

  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  try {

    const brSpacing = document.createElement('br')
    divContainer.append(brSpacing)
    const hrLine = document.createElement('hr')
    divContainer.append(hrLine)
    const answerResponse = document.createElement('p')
    answerResponse.innerText = ''

    // selecting which parts of the lyrics we want to append to the DOM 

    const lyrics = response.data.result.track.text
    let firstLine = ''
    for (i = a; i < b; i++) {
      firstLine += lyrics[i]
    }
    let firstWord = ''
    for (r = c; r < d; r++) {
      firstWord += lyrics[r]
    }
    const musicianObject = {
      prompt: firstLine + '...',
      correctAnswer: firstWord,
      wrongAnswers: wrongAnswersArray
    }

    // creating the title, gif, etc 

    const displayTitle = document.createElement('h2')
    displayTitle.innerText = (`${artist}, ${song}`)
    divContainer.append(displayTitle)

    const displayGif = document.createElement('img')
    displayGif.style.width = imageWidth;
    displayGif.setAttribute('src', gif)
    divContainer.append(displayGif)

    const instruction = document.createElement('p')
    instruction.innerText = `Finish the lyric: `
    divContainer.append(instruction)

    const displayMusic = document.createElement('p')
    displayMusic.innerText = musicianObject.prompt
    divContainer.append(displayMusic)


    //divContainer.style.display = 'none'

    const quiz = document.createElement('ul')

    const numbers = [0, 1, 2, 3]

    const numbers2 = shuffle(numbers)

    divContainer.append(quiz)

    const zeroAnswer = document.createElement('li')
    const oneAnswer = document.createElement('li')
    const twoAnswer = document.createElement('li')
    const threeAnswer = document.createElement('li')

    // giving the answers created above a correct or incorrect answer 
    // choice and appending them in a random order onto the DOM
    for (x = 0; x < numbers2.length; x++) {
      if (numbers2[x] == 0) {
        zeroAnswer.innerText = musicianObject.correctAnswer
        quiz.append(zeroAnswer)
        zeroAnswer.addEventListener("click", function () {
          zeroAnswer.style.border = "10px solid green"
          oneAnswer.style.border = "0px solid green"
          twoAnswer.style.border = "0px solid green"
          threeAnswer.style.border = "0px solid green"

          document.querySelector(id1).style.display = "inline"
          document.querySelector(id2).style.display = "none"

          instruction.innerText = 'Good job!'
          instruction.style.color = 'green'
          instruction.style.fontSize = '30px';
          displayMusic.innerText = ''

          if (clickValue === 0) {
            scoreValue = scoreValue + 1;
            scoreCounter.innerText = `FINAL SCORE: ${scoreValue}/15`;

            clickValue += 1
            console.log(clickValue)
          }

        })
      }
      else if (numbers2[x] == 1) {
        oneAnswer.innerText = musicianObject.wrongAnswers[0]
        quiz.append(oneAnswer)
        oneAnswer.addEventListener("click", function () {
          oneAnswer.style.border = "10px solid red"
          zeroAnswer.style.border = "0px solid green"
          twoAnswer.style.border = "0px solid green"
          threeAnswer.style.border = "0px solid green"

          document.querySelector(id2).style.display = "inline"
          document.querySelector(id1).style.display = "none"

          instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
          instruction.style.color = 'red'
          instruction.style.fontSize = '30px';
          displayMusic.innerText = ''

          clickValue += 1

        })
      }
      else if (numbers2[x] == 2) {
        twoAnswer.innerText = musicianObject.wrongAnswers[1]
        quiz.append(twoAnswer)
        twoAnswer.addEventListener("click", function () {
          twoAnswer.style.border = "10px solid red"
          zeroAnswer.style.border = "0px solid green"
          oneAnswer.style.border = "0px solid green"
          threeAnswer.style.border = "0px solid green"

          document.querySelector(id2).style.display = "inline"
          document.querySelector(id1).style.display = "none"

          instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
          instruction.style.color = 'red'
          instruction.style.fontSize = '30px';
          displayMusic.innerText = ''

          clickValue += 1

        })
      }
      else {
        threeAnswer.innerText = musicianObject.wrongAnswers[2]
        quiz.append(threeAnswer)
        threeAnswer.addEventListener("click", function () {
          threeAnswer.style.border = "10px solid red"
          zeroAnswer.style.border = "0px solid green"
          oneAnswer.style.border = "0px solid green"
          twoAnswer.style.border = "0px solid green"

          document.querySelector(id2).style.display = "inline"
          document.querySelector(id1).style.display = "none"

          instruction.innerText = `Wrong! Correct answer: ${musicianObject.correctAnswer}`
          instruction.style.color = 'red'
          instruction.style.fontSize = '30px';
          displayMusic.innerText = ''

          clickValue += 1
        })
      }
    }


  }
  catch (error) {
    console.log("error!")
  }
}

startScreen()

const questionOrderSorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const questionOrder = shuffle(questionOrderSorted)
const divOrder = [musicDiv, musicDiv2, musicDiv3, musicDiv4, musicDiv5, musicDiv6, musicDiv7, musicDiv8, musicDiv9, musicDiv10, musicDiv11, musicDiv12, musicDiv13, musicDiv14, musicDiv15]
const rightAnswer = ['#q1Right', '#q2Right', '#q3Right', '#q4Right', '#q5Right', '#q6Right', '#q7Right', '#q8Right', '#q9Right', '#q10Right', '#q11Right', '#q12Right', '#q13Right', '#q14Right', '#q15Right']
const wrongAnswer = ['#q1Wrong', '#q2Wrong', '#q3Wrong', '#q4Wrong', '#q5Wrong', '#q6Wrong', '#q7Wrong', '#q8Wrong', '#q9Wrong', '#q10Wrong', '#q11Wrong', '#q12Wrong', '#q13Wrong', '#q14Wrong', '#q15Wrong']


// running each of the 10 functions, and assigning them to a random 
// div (The div controls the position on the webpage. Eg musicDiv2 means it
// will the be the second question, musicDiv3 means it will be the third, etc)

for (c = 0; c < questionOrder.length; c++) {

  if (c === 0) {

    finishTheLyric('Beatles', 'Penny Lane', 0, 36, 37, 48, '500px', ['his photo collection', 'haircuts', 'paintings'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/SQFoY6QupT5V6/giphy.gif?cid=ecf05e47thqni4iz9zmuw8lwdmu9mwfpxfovg3sxrxc0na4n&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 1) {
    finishTheLyric('Nirvana', 'Smells Like Teen Spirit', 287, 334, 334, 345, '400px', ['outrageous', `sagacious`, `cretaceous`], divOrder[questionOrder[c]], "https://64.media.tumblr.com/8944ac37eb01f195b2f1c99634376830/tumblr_mhk457ePzS1rn29sdo1_500.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 2) {
    finishTheLyric('Drake', `God's Plan`, 539, 555, 556, 567, '500px', ['Westeros', 'Old Town Road', 'Westville Road'], divOrder[questionOrder[c]], "https://media4.giphy.com/media/3o85xosW6qQsCsZ3Ve/giphy.gif?cid=ecf05e4793d86e0ac4d7c3776f31f3445a8a54085c6ec850&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 3) {
    finishTheLyric('Bill Withers', `Lean On Me`, 259, 314, 314, 320, '350px', ['know', 'hide', 'steal'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/xT1R9KovfllTplpkkM/giphy.gif?cid=ecf05e47svkyzsudcvb54rzaakenout5d3044ucktmytrary&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 4) {
    finishTheLyric('Notorious B.I.G.', `Juicy`, 2534, 2601, 2602, 2614, '500px', ['afford this', 'configure this', 'repair this'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/AsDBIwyLjHc9G/giphy.gif?cid=ecf05e47nfxmozgja2q11hbcuuk9x47h0x4m6c0ojlx9v78v&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 5) {
    finishTheLyric('Radiohead', `Karma Police`, 13, 42, 43, 49, '450px', ['riddles', 'French', 'stats'], divOrder[questionOrder[c]], "https://thumbs.gfycat.com/PoliticalAdmirableBird.webp", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 6) {
    finishTheLyric('Queen', `Bohemian Rhapsody`, 890, 966, 967, 975, '500px', ['fast Tango', 'waltz', 'flamenco'], divOrder[questionOrder[c]], "https://media4.giphy.com/media/YWlGAzJti8XIHamqKu/giphy.gif?cid=ecf05e476ilh3hbvzlfj4l354gwhcm6ag74x6f1vdg3hovtf&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 7) {
    finishTheLyric('Nas', `The World Is Yours`, 336, 361, 362, 368, '500px', ['Yanni', 'TV', 'the Simpsons'], divOrder[questionOrder[c]], "https://i.gifer.com/MnQZ.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 8) {
    finishTheLyric('The White Stripes', `Seven Nation Army`, 208, 247, 248, 258, '450px', ['paywall', 'brain fog', 'riddle'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/8cSaoSQ9Wokcq3Qm51/giphy.gif?cid=ecf05e473b341herv7lvxkr071enz16u7blrxqvqt3mfs4j2&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 9) {
    finishTheLyric('Chris Stapleton', `Tennessee Whiskey`, 10, 42, 43, 50, '500px', ['library', 'jail cell', 'slump'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/BCe5xbtqwTh7NcmmR5/giphy.gif?cid=ecf05e470bb6e9f9f00a2666c21a87c05146b0085df4f6f9&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 10) {
    finishTheLyric('Bob Dylan', `Blowin' in the Wind`, 67, 130, 130, 135, '300px', ['blue whale', 'soft bed', 'nest'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/kpgzE7I82DNfO/giphy.gif?cid=ecf05e475h9l3cjbmyx4jfuto5pfhjh77hmjyp9whtkc3iuu&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 11) {
    finishTheLyric('Ed Sheeran', `Thinking Out Loud`, 833, 870, 870, 880, '500px', ['immortal', 'nonexistant', 'gold'], divOrder[questionOrder[c]], "https://media2.giphy.com/media/35yNLTW7Eba9ZuVtbh/giphy.gif?cid=ecf05e4756eff247fe03f8aa0d9d7065fc4a2aec39214b00&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 12) {
    finishTheLyric('Adele', `Rolling in the Deep`, 447, 484, 484, 495, '450px', ['bleeding', 'pained', 'drained'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/13vJHSyname1Hy/giphy.gif?cid=ecf05e475i7tkh57yz14gzd1fwmz4zabtoi8o85sweoe5l3p&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else if (c === 13) {
    finishTheLyric('Elvis Pressley', `Jailhouse Rock`, 45, 88, 88, 93, '500px', ['rock', 'fight', 'dance'], divOrder[questionOrder[c]], "https://media3.giphy.com/media/2in9K8r6lnAPjPJNZt/giphy.gif?cid=ecf05e47zahlbq0nwwsrqe470oc2ltjs86eiswqxsedf7xn2&rid=giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
  else {
    finishTheLyric('Aretha Franklin', `Respect`, 92, 140, 140, 149, '500px', ['see me', 'hear me', 'get here'], divOrder[questionOrder[c]], "https://media1.giphy.com/media/OjIM4Rgkv8gKj4KWku/giphy.gif", rightAnswer[questionOrder[c]], wrongAnswer[questionOrder[c]])
  }
}


