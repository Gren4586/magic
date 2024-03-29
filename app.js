// Define variable for username
let userName = ''
// Print personalized or standard greeting based on if a username is defined
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`)

// Define variable for user's question
let userQuestion = 'Will I get that promotion?'
console.log(`So, ${userName}, you want to know "${userQuestion}", is that right?`)


// Define variable for random number to be used in deciding response.
let randomNumber = Math.floor(Math.random() * 8);
// Define variable for what will be the decided answer.
let eightBall = ''

// Define the answers tied to the numbers generated by math.random
switch (randomNumber) {
  case 0:
    eightBall = 'My informants tell me it is likely.'
    break;
  case 1:
    eightBall = 'I flipped a coin and it said yes.'
    break;
  case 2:
    eightBall = 'Sorry, what? I zoned out.'
    break;
  case 3:
    eightBall = 'I dunno, man. Why you botherin\' me?'
    break;
  case 4:
    eightBall = 'No way, I don\'t think that\'s possible.'
    break;
  case 5:
    eightBall = 'I read online that it can\'t happen.'
    break;
  case 6:
    eightBall = 'My old math teacher told me that some dreams should be given up on. You could follow his advice.'
    break;
  case 7:
    eightBall = 'Sure, why not?'
    break;
}

// Print the chosen answer.
console.log(eightBall);
