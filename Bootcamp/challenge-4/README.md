# Coding Quiz Challenge

## User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## What I Completed for my HTML
This week’s Challenge invited us to build a timed coding quiz with multiple-choice questions. This app needed to  feature dynamically updated HTML and CSS powered by JavaScript code that I wrote. When starting this assignment the first thing that I worked on was the HTML so that I knew what I wanted my page to initially look like when people arrived at the site. I knew I needed a title a description and several buttons on my page to get started so that is what I did. After completing that I knew I needed to create something that would hold my actual quiz so I began working on a panel that would hold my questions and multiple choice answers. I knew the questions and answers would need to be rotated out so I made sure not to include the actual questions and answer choices to my quiz in the panel. The last thing I knew I needed for my HTML was a final form to submit results. So I made sure I included that as well. The most tedious thing that I knew I really needed to focus on with my HTML was making sure I had enough classes and id's for all the things I needed to adjust and change in my Javascript and CSS. 

## What I Completed for my JavaScript

After I completed my HTML I got to work on my JavaScript. The first thing I made sure to pull were all my variables I needed from my HTML, including all my buttons. After that I created new variables I needed in my Javascript to make sure that my timer would work. The next thing I did was create an array of all the questions I needed for my quiz. In the array I included all the questions, the answer choices, and the correct answer. After I had all my question I created two functions. One for when the user chose the correct respons and one for the incorrect response. In those two function I made sure that it would print out whether the user got the answer correct on incorrect, it would add or deduct points based off the response, and that it would got the next question once a choice was made. For the incorrect answer function I also had to include my timer count variable and made it so that the timer decreased by 10 seconds if the incorrect selection was made. I also added an if statement if the timer had run out to make not go to the following question and just display results, which I knew was a function I would later need. 

After that I started to get a work on my timer function, which set my timer to count down, and ensured that if the timer had run out, to run my display result function. After that I got to work on my display result function. In my HTML I added a nodisp class to hide certain elements I knew I would need to hide like my quiz and my display of results. So in that function I knew that once this ran I would not want to display my quiz any longer and I just wanted to display my results. So in my function I added the nodisp and removed the nodisp class to my quiz container and final result varaibles respectively. After working on that I started working onmy functions to store points and to get points using several if else statements and local storage. I also made sure that my quiz reset completely in this function. Then after that I made a function to reset point which also cleared my local storage completely. 

The last function I worked on was my start quiz function. In that function I knew I had to remove my no disp class so that the quiz would appear and I needed to remove the items on my initial page so I added the no disp class on that variable. I made sure that the timer started once the quiz displayed and then I worked on a function to cycle through questions. This was probably the most difficult thing because I had to constantly add and remove event listeners to each of my questions because the answers were all in different locations. Once I completed that the last thing I did was add event listener for all my buttons so that my page would actually work. 



## What Did I Complete for my CSS

The last thing I worked on was my CSS. I wanted my page to be fully functional before messing with my styling. The first thing I knew I needed for my CSS was to make sure that my nodisp class was in there and working so that I would hide and display certain aspects I needed. When I did that I made sure to add !important to it because I needed to make sure that if this class was on an element it would overide the other CSS I needed to make for it and that it actually did not display anything. After that I just went through several aspects of my html and adjusted spacing, coloring and size so that it was easily readable. 

## Screenshot of my Page 
![alt text](/screenshots/screenshotoflanding.png "Initial Page")

![alt text](/screenshots/screenshotofquiz.png "Quiz Page")

![alt text](/screenshots/finalscore.png "Final Result Page")
