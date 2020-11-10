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
| Working With the API | H | 3hrs| |  |
| Research | Moderate | 2hrs|  |  |
| Game Design | H | 3hrs|  |  |
| Dom Manipulation | Moderate | 3hrs| |  |
| Flexbox/CSS Review | High | 2hrs|  | |
| Graphic Design | Moderate | 3hrs|  |  |
| Flexbox | Moderate | 3hrs|  | |
| Writing Text | Moderate | 3hrs| |  |
| Feedback | H | 3hrs|  |  |
| Incorporating Suggestions | H | 3hrs|  |  |
| Debugging the code | H | 3hrs|  |  |
| Testing | H | 3hrs|  |  |
| Cleaning up the code | Moderate | 2hrs|  |  |
| Total | H | 36hrs|  |  |

## Code Snippet


## Change Log

