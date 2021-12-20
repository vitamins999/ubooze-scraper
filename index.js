const prompt = require('prompt');

prompt.start();

prompt.get('Does this work?', (err, result) => {
  let answer = result['Does this work?'].toLowerCase();
  if (answer === 'y') {
    console.log('Yay!');
  } else if (answer === 'n') {
    console.log('Oh no!');
  } else {
    console.log('U wot?');
  }
});
