

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

async function finishTheLyric(artist, song, a, b, c, d, wrongAnswersArray, divContainer, gif) {
  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  try {
    const lyrics = response.data.result.track.text
    let firstLine = ''
    for (i = a; i < b; i++) {
      firstLine += lyrics[i]
    }
    let firstWord = ''
    for (i = c; i < d; i++) {
      firstWord += lyrics[i]
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

    const answer1 = document.createElement('li')
    answer1.innerText = musicianObject.correctAnswer
    quiz.append(answer1)

    const answer2 = document.createElement('li')
    answer2.innerText = musicianObject.wrongAnswers[0]
    quiz.append(answer2)

    const answer3 = document.createElement('li')
    answer3.innerText = musicianObject.wrongAnswers[1]
    quiz.append(answer3)

    const answer4 = document.createElement('li')
    answer4.innerText = musicianObject.wrongAnswers[2]
    quiz.append(answer4)

    divContainer.append(quiz)
  }
  catch (error) {
    console.log("error!")
  }
}

finishTheLyric('Beatles', 'Penny Lane', 0, 36, 37, 48, ['his photo collection', 'haircuts', 'paintings'], musicDiv, "https://media3.giphy.com/media/SQFoY6QupT5V6/giphy.gif?cid=ecf05e47thqni4iz9zmuw8lwdmu9mwfpxfovg3sxrxc0na4n&rid=giphy.gif")

finishTheLyric('Nirvana', 'Smells Like Teen Spirit', 287, 334, 334, 345, ['outrageous', `sagacious`, `cretaceous`], musicDiv2, "https://64.media.tumblr.com/8944ac37eb01f195b2f1c99634376830/tumblr_mhk457ePzS1rn29sdo1_500.gif")

finishTheLyric('Drake', `God's Plan`, 539, 555, 556, 567, ['Westeros', 'West Town Road', 'Westville Road'], musicDiv3, "https://media4.giphy.com/media/3o85xosW6qQsCsZ3Ve/giphy.gif?cid=ecf05e4793d86e0ac4d7c3776f31f3445a8a54085c6ec850&rid=giphy.gif")

finishTheLyric('Bill Withers', `Lean On Me`, 257, 314, 314, 320, ['know', 'hide', 'steal'], musicDiv4, "https://media1.giphy.com/media/xT1R9KovfllTplpkkM/giphy.gif?cid=ecf05e47svkyzsudcvb54rzaakenout5d3044ucktmytrary&rid=giphy.gif")

// Old Town Road