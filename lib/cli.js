const inquirer = require('inquirer');
const textSVG = require('./textSVG');
const shapeSVG = require('./shapeSVG');

//Command Line Interface (CLI) class
class CLI {
  constructor() {
    this.questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Characters?',
        validate: input => {
          if (input.length > 3) {
            return 'Please enter 3 characters or less.';
          }
          return true;
        }, 
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color name ore hexadecimal value?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['square', 'circle', 'triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color name ore hexadecimal value?',
      }    
    ];
  }

  run() {
    inquirer.prompt(this.questions).then(answers => {
      /*console.log(`text: ${answers.text}`);
      console.log(`text color: ${answers.textColor}`);
      console.log(`shape: ${answers.shape}`);
      console.log(`shape color: ${answers.shapeColor}`);*/
        const text = textSVG.createText(answers);
        const shape = shapeSVG.createShape(answers);
        console.log(`${text}\n${shape}`)
    });
  }
}

module.exports = CLI;