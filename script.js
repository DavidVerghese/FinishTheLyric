
const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
document.body.append(musicDiv)

async function dearPrudence(artist, song) {
  //console.log('hi')
  const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  try {
    const lyrics = response.data.lyrics
    let firstLine = ''
    for (i = 0; i < 42; i++) {
      firstLine += lyrics[i]
    }
    const displayMusic = document.createElement('p')
    displayMusic.innerText = firstLine
    musicDiv.append(displayMusic)
  }
  catch (error) {
    console.log("error!")
  }
}

music('beatles', 'dear prudence')

// document.querySelector('#clicked').addEventListener("click", function () {
//   music('the beatles', 'hey jude')
// })

