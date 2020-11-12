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

async function finishTheLyric(artist, song, a, b, c, d, wrongAnswersArray, divContainer) {
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

finishTheLyric('Beatles', 'Penny Lane', 0, 36, 37, 48, ['his photo collection', 'haircuts', 'paintings'], musicDiv)

finishTheLyric('Nirvana', 'Smells Like Teen Spirit', 374, 395, 396, 408, ['a mojito', `a dorito`, `YEAH!`], musicDiv2)

finishTheLyric('Drake', `God's Plan`, 539, 555, 556, 567, ['Westeros', 'West Town Road', 'Westville Road'], musicDiv3)

