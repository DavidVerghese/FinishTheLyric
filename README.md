# Project Overview

## Finish The Lyric

## Project Description

I want to create a quiz where users guess the last word in a famous song lyric. I'd like to include images and sound effects, as well.

## API and Data Sample

I'm using this API: https://lyricsovh.docs.apiary.io/#

```json
{
    "lyrics": "Imagine there's no heaven\r\nIt's easy if you try\r\nNo hell below us\r\nAbove us only sky\r\nImagine all the people\r\nLiving for today... \n\n\n\nImagine there's no countries\n\nIt isn't hard to do\n\nNothing to kill or die for\n\nAnd no religion too\n\nImagine all the people\n\nLiving life in peace... \n\n\n\nYou may say I'm a dreamer\n\nBut I'm not the only one\n\nI hope someday you'll join us\n\nAnd the world will be as one \n\n\n\nImagine no possessions\n\nI wonder if you can\n\nNo need for greed or hunger\n\nA brotherhood of man\n\nImagine all the people\n\nSharing all the world... \n\n\n\nYou may say I'm a dreamer\n\nBut I'm not the only one\n\nI hope someday you'll join us\n\nAnd the world will live as one"
}

```

## Wireframes

Wireframe for Desktop: 
The introduction: 

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wireframe%20for%20Desktop%20Intro.png "Wireframe for Desktop Intro")

The quiz: 

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wireframe%20for%20Desktop.png "Wireframe for Desktop Quiz")

The results page: 

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wireframe%20for%20Desktop%20Outro.png "Wireframe for Desktop Quiz Outro")

Wireframe for Mobile: 

The intro: 

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wire%20for%20Mobile%20Intro.png "Wireframe for Desktop Quiz Into")

The quiz: 

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wireframe%20for%20Mobile.png "Wireframe for Mobile Quiz")

The result:

![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/Wireframe%20for%20Mobile%20Outro.png "Wireframe for Mobile Quiz Outro")

### MVP/PostMVP

#### MVP 

- Take lyrics from the API and append them to the DOM
- Take lyrics from the API and store them as values inside of object. For example, the object 'beatle' will have the property 'songLyric' with the value: 'I heard the news today, oh boy'. 
- Have a system to randomly select objects from an array, and create questions based on the selected object when the user presses the 'next' button to move on to the next question. Make sure the user doesn't receive questions about the same object more than once. 
- Have multiple choice questions, with one correct option, and three incorrect options. The options should be in a random order. 

#### PostMVP  

- Have a score counter
- Incorporate information about the user, such as their name, into the game instructions. 
- Incorporate sound effects
- Create a property called 'difficulty' inside each object, and assign it a value of 'easy', 'medium', or 'hard'. Create new arrays that store all the objects that have the same level of difficulty. 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval | Incomplete
|Nov 12| Core Application Structure (HTML, CSS, JS). Work on getting information from API. | Incomplete
|Nov 13| Work on creating objects, and system of randomly selecting objects. | Incomplete
|Nov 16| Finish MVP, get feedback from testers | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix


![alt text](https://github.com/DavidVergheseProgrammer/FinishTheLyric/blob/main/Folder/priority%20matrix.png "Priority Matrix")

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working With the API | H | 3hrs|3hrs |3hrs  |
| Research | Moderate | 2hrs| 5hrs | 5hrs |
| Game Design | H | 3hrs| 2hrs |2hrs  |
| Dom Manipulation | Moderate | 3hrs|3hrs |  |
| Flexbox/CSS Review | High | 2hrs| 1hr | 1hr|
| Graphic Design | Moderate | 3hrs| 4hrs |4hrs  |
| Flexbox | Moderate | 3hrs| 3hrs | 3hrs|
| Writing Text | Moderate | 3hrs| 2hrs| 2hrs |
| Feedback | H | 3hrs|  0hrs | 0hrs |
| Incorporating Suggestions | H | 3hrs| 0hrs |0hrs  |
| Debugging the code | H | 3hrs| 4hrs | 4hrs |
| Testing | H | 3hrs|3hrs  | 3hrs |
| Cleaning up the code | Moderate | 2hrs|1hr  |1hrs  |
| Total | H | 36hrs|31hrs  |31hrs  |

## Code Snippet

```let clickValue = 0;
if (clickValue === 0) {
    scoreValue = scoreValue + 1;
    scoreCounter.innerText = "FINAL SCORE: ${scoreValue}/15";
    clickValue += 1;
}
```

The code above goes inside an event listener that reacts if the user clicks the right choice. I wanted to update the score once the user clicks the right answer. However, I needed to make sure this only occurred only once. I initially had a problem where the score would be updated multiple times if the user clicked the correct choice more than once. I used the if statement and the variable clickValue to make sure it only runs once. 

## Change Log

I had to change the API I used. I initially used the 'lyrics.ovh' api (https://lyricsovh.docs.apiary.io/#). However, this API would only work the first time I called it. I initally thought I wasn't using the right protocol to access the API. However, I showed it to Stefon, who confirmed it was in fact a problem with the API. I switched to the 'Apiseeds' api (https://apiseeds.com/documentation/lyrics). This worked fine. 
I initally had 'next' buttons. I wanted to make sure that only one question displayed at a time. The idea was that once the user clicked the 'next' button it would display a new question and remove the previous question. However, I realised that the game worked fine with all the questions on the same webpage.
Another thing I had to modify was the function shuffle. I based this on the shuffle card function from the 'high_low game' homework. In my code, I used the shuffle to randomly place the multiple choice answers, so that the correct answer would be in a random position. However, I found that the correct anwser was usually in the third or fourth spot from the left, and never in the first spot from the left. I wasn't able to figure out why this was. However, I modified the function shuffle so that there is a 50% chance that the order of the questions will be reversed. This solved this problem.


