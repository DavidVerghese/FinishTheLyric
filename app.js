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

// from 'high_low game' homework
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

function startScreen() {
  removeQuestion()
  const displayGif = document.createElement('img')
  displayGif.setAttribute('src', `https://media2.giphy.com/media/l41lGtNHF5etg5B0Q/giphy.gif`)
  introScreen.append(displayGif)
  const introText = document.createElement('p')
  introText.innerText = `Are you ready to test your music trivia knowledge?`
  introScreen.append(introText)
  introScreen.insertAdjacentHTML(`beforeend`, `<a href="#first"><button class="next">Start the quiz</button></a>`)
}
startScreen()

async function finishTheLyric(artist, song, a, b, c, d, wrongAnswersArray, divContainer, gif, id1, id2) {
  removeQuestion()
  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  try {
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

    const displayTitle = document.createElement('h2')
    displayTitle.innerText = (`${artist}, ${song}`)
    divContainer.append(displayTitle)

    const displayGif = document.createElement('img')
    displayGif.setAttribute('src', gif)
    divContainer.append(displayGif)

    const instruction = document.createElement('p')
    instruction.innerText = `Finish the lyric: `
    divContainer.append(instruction)

    const displayMusic = document.createElement('p')
    displayMusic.innerText = musicianObject.prompt
    divContainer.append(displayMusic)

    const quiz = document.createElement('ul')

    const numbers = [0, 1, 2, 3]

    const numbers2 = shuffle(numbers)

    divContainer.append(quiz)

    for (x = 0; x < numbers2.length; x++) {
      if (numbers2[x] == 0) {
        const zeroAnswer = document.createElement('li')
        zeroAnswer.innerText = musicianObject.correctAnswer
        quiz.append(zeroAnswer)
        zeroAnswer.addEventListener("click", function () {
          zeroAnswer.style.border = "10px solid green"

          document.querySelector(id1).style.display = "inline"
        })
      }
      else if (numbers2[x] == 1) {
        const oneAnswer = document.createElement('li')
        oneAnswer.innerText = musicianObject.wrongAnswers[0]
        quiz.append(oneAnswer)
        oneAnswer.addEventListener("click", function () {
          oneAnswer.style.border = "10px solid red"
          document.querySelector(id2).style.display = "inline"
        })
      }
      else if (numbers2[x] == 2) {
        const twoAnswer = document.createElement('li')
        twoAnswer.innerText = musicianObject.wrongAnswers[1]
        quiz.append(twoAnswer)
        twoAnswer.addEventListener("click", function () {
          twoAnswer.style.border = "10px solid red"
          document.querySelector(id2).style.display = "inline"
        })
      }
      else {
        const threeAnswer = document.createElement('li')
        threeAnswer.innerText = musicianObject.wrongAnswers[2]
        quiz.append(threeAnswer)
        threeAnswer.addEventListener("click", function () {
          threeAnswer.style.border = "10px solid red"
          document.querySelector(id2).style.display = "inline"
        })
      }
    }
    console

    divContainer.insertAdjacentHTML('beforeend', `<a href="#second"><button class="next">Next</button></a> <hr>`)
    console.log(divContainer.innerHTML)

  }
  catch (error) {
    console.log("error!")
  }
}

function removeQuestion() {
  const remove = document.querySelectorAll('.music')

  for (p = 0; p < remove.length; p++) {
    console.log(remove[p])
    remove[p].innerHTML = ''
  }
  introScreen.innerHTML = ''
}

document.getElementById('trigger0').addEventListener("click", function () {
  startScreen()
})

document.getElementById('trigger1').addEventListener("click", function () {
  finishTheLyric('Beatles', 'Penny Lane', 0, 36, 37, 48, ['his photo collection', 'haircuts', 'paintings'], musicDiv, "https://media3.giphy.com/media/SQFoY6QupT5V6/giphy.gif?cid=ecf05e47thqni4iz9zmuw8lwdmu9mwfpxfovg3sxrxc0na4n&rid=giphy.gif", '#q1Right', '#q1Wrong')
})

document.getElementById('trigger2').addEventListener("click", function () {
  finishTheLyric('Nirvana', 'Smells Like Teen Spirit', 287, 334, 334, 345, ['outrageous', `sagacious`, `cretaceous`], musicDiv2, "https://64.media.tumblr.com/8944ac37eb01f195b2f1c99634376830/tumblr_mhk457ePzS1rn29sdo1_500.gif", '#q2Right', '#q2Wrong')
})

document.getElementById('trigger3').addEventListener("click", function () {
  finishTheLyric('Drake', `God's Plan`, 539, 555, 556, 567, ['Westeros', 'West Town Road', 'Westville Road'], musicDiv3, "https://media4.giphy.com/media/3o85xosW6qQsCsZ3Ve/giphy.gif?cid=ecf05e4793d86e0ac4d7c3776f31f3445a8a54085c6ec850&rid=giphy.gif", '#q3Right', '#q3Wrong')
})

document.getElementById('trigger4').addEventListener("click", function () {
  finishTheLyric('Bill Withers', `Lean On Me`, 257, 314, 314, 320, ['know', 'hide', 'steal'], musicDiv4, "https://media1.giphy.com/media/xT1R9KovfllTplpkkM/giphy.gif?cid=ecf05e47svkyzsudcvb54rzaakenout5d3044ucktmytrary&rid=giphy.gif", '#q4Right', '#q4Wrong')
})

document.getElementById('trigger5').addEventListener("click", function () {
  finishTheLyric('Notorious B.I.G.', `Juicy`, 2534, 2601, 2602, 2614, ['afford this', 'configure this', 'repair this'], musicDiv5, "https://media1.giphy.com/media/AsDBIwyLjHc9G/giphy.gif?cid=ecf05e47nfxmozgja2q11hbcuuk9x47h0x4m6c0ojlx9v78v&rid=giphy.gif", '#q5Right', '#q5Wrong')
})

document.getElementById('trigger6').addEventListener("click", function () {
  finishTheLyric('Radiohead', `Karma Police`, 13, 42, 43, 49, ['riddles', 'French', 'stats'], musicDiv6, "https://thumbs.gfycat.com/PoliticalAdmirableBird.webp", '#q6Right', '#q6Wrong')
})

document.getElementById('trigger7').addEventListener("click", function () {
  finishTheLyric('Queen', `Bohemian Rhapsody`, 890, 966, 967, 975, ['fast Tango', 'waltz', 'flamenco'], musicDiv7, "https://media4.giphy.com/media/YWlGAzJti8XIHamqKu/giphy.gif?cid=ecf05e476ilh3hbvzlfj4l354gwhcm6ag74x6f1vdg3hovtf&rid=giphy.gif", '#q7Right', '#q7Wrong')
})

document.getElementById('trigger8').addEventListener("click", function () {
  finishTheLyric('Nas', `The World Is Yours`, 336, 361, 362, 368, ['Yanni', 'TV', 'the Simpsons'], musicDiv8, "https://i.gifer.com/MnQZ.gif", '#q8Right', '#q8Wrong')
})

document.getElementById('trigger9').addEventListener("click", function () {
  finishTheLyric('The White Stripes', `Seven Nation Army`, 207, 247, 248, 258, ['paywall', 'brain fog', 'riddle'], musicDiv9, "https://media1.giphy.com/media/8cSaoSQ9Wokcq3Qm51/giphy.gif?cid=ecf05e473b341herv7lvxkr071enz16u7blrxqvqt3mfs4j2&rid=giphy.gif", '#q9Right', '#q9Wrong')

})

document.getElementById('trigger10').addEventListener("click", function () {
  finishTheLyric('Chris Stapleton', `Tennessee Whiskey`, 10, 42, 43, 50, ['library', 'jail cell', 'slump'], musicDiv10, "https://media1.giphy.com/media/BCe5xbtqwTh7NcmmR5/giphy.gif?cid=ecf05e470bb6e9f9f00a2666c21a87c05146b0085df4f6f9&rid=giphy.gif", '#q10Right', '#q10Wrong')
})



