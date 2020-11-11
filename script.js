const attach = document.querySelector('#attach')

const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
attach.append(musicDiv)


async function song(artist, song) {
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

song('Beatles', 'Penny Lane')


