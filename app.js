let userName = 'Ruqaiya';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I adopt a new puppt soon?';

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`The magic eight ball says - ${eightBall}`);


let randomFourBallNumber = Math.floor(Math.random() * 4);

let fourBall = ''

if (randomFourBallNumber === 0) {
  fourBall = 'Yes you absolutely must';
} else if (randomFourBallNumber === 1) {
  fourBall = 'Think about it again';
} else if (randomFourBallNumber === 2) {
  fourBall = 'I suggest otherwise';
} else {
  fourBall = 'Just do it';
}

console.log(`The four ball says - ${fourBall}`);
