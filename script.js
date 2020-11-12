const attach = document.querySelector('#attach')

const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
attach.append(musicDiv)

const attach2 = document.querySelector('#attach2')

const musicDiv2 = document.createElement('div')
musicDiv2.setAttribute('class', 'music')
attach2.append(musicDiv2)


async function beatles(artist, song) {
  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  console.log(response.data.result.track.text)
  try {
    const lyrics = response.data.result.track.text
    let firstLine = ''
    for (i = 0; i < 37; i++) {
      firstLine += lyrics[i]
    }
    let firstWord = ''
    for (i = 37; i < 48; i++) {
      firstWord += lyrics[i]
    }

    const beatles = {
      prompt: firstLine,
      answer: firstWord,
      wrong: ['his photo collection', 'haircuts', 'paintings']
    }
    const displayMusic = document.createElement('p')
    displayMusic.innerText = beatles.prompt
    musicDiv.append(displayMusic)

    const quiz = document.createElement('ul')
    const answer1 = document.createElement('li')
    answer1.innerText = beatles.answer
    quiz.append(answer1)
    musicDiv.append(quiz)

    const answer2 = document.createElement('li')
    answer2.innerText = beatles.wrong[0]
    quiz.append(answer2)
    musicDiv.append(quiz)

    const answer3 = document.createElement('li')
    answer3.innerText = beatles.wrong[1]
    quiz.append(answer3)
    musicDiv.append(quiz)

    const answer4 = document.createElement('li')
    answer4.innerText = beatles.wrong[2]
    quiz.append(answer4)
    
    musicDiv.append(quiz)

  }
  catch (error) {
    console.log("error!")
  }
}

beatles('Beatles', 'Penny Lane')

async function nirvana(artist, song) {
  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  // console.log(response.data.result.track.text)
  try {
    const lyrics = response.data.result.track.text
    console.log(lyrics)
    let firstLine = ''
    for (i = 374; i < 395; i++) {
      firstLine += lyrics[i]
    }

    let correctAnswer = ''
    for (i = 396; i < 408; i++) {
      correctAnswer += lyrics[i]
    }

    const nirvanaObject = {
      prompt: firstLine,
      answer: correctAnswer,
      wrong: ['a mojito', `a dorito`, `yeaaahhhhh!!!`]
    }
    const displayMusic = document.createElement('p')
    displayMusic.innerText = nirvanaObject.prompt
    musicDiv2.append(displayMusic)

    const quiz = document.createElement('ul')
    const answer1 = document.createElement('li')
    answer1.innerText = nirvanaObject.answer
    quiz.append(answer1)
    //musicDiv2.append(quiz)

    const answer2 = document.createElement('li')
    answer2.innerText = nirvanaObject.wrong[0]
    quiz.append(answer2)
    //musicDiv2.append(quiz)

    const answer3 = document.createElement('li')
    answer3.innerText = nirvanaObject.wrong[1]
    quiz.append(answer3)

    const answer4 = document.createElement('li')
    answer4.innerText = nirvanaObject.wrong[2]
    quiz.append(answer4)

    musicDiv2.append(quiz)

  }
  catch (error) {
    console.log("error!")
  }
}

nirvana('Nirvana', 'Smells Like Teen Spirit')


