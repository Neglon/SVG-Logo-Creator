# SVG-Logo-Creator

## Video Link
[Video](https://drive.google.com/file/d/11-j28jVqgKJZMORidm32HHIQiuAEkH5k/view)

## Description
    - As a developer I wanted to be able to generate a simple logo without paying a graphic designer
    - This project was built to allow users to quickly enter information via propmted questions to fill out the code for an .svg file that makes a logo, with up to 3 letters of text of any color, inside either a triangle, square, or circle of any color.
    - This project was able to solve how to use object orientated design, by having multiple .js files each with their own task, rather than all of the code in one file. It uses jest with test files to make sure the functions are working as intended. Lastly, it solves the users problem by creating the logo of their choice via their inputs.  
    - This project allowed me to learn how to create test suites for jest, to test each of my .js files. This seperation of functions in individual .js files allows for more target and simpler tests suites to make sure each piece is functioning, and if one is not it makes diagnosing and solving the issue easier, than if the entirety of the code was in one file. I leanred about the validate functionality within inquirer, in this case to make sure the user does not enter more than 3 characters for the text portion.
    

## Installation
    To install this follow the link to the github repository below.
[SVG Logo Creator](https://github.com/Neglon/SVG-Logo-Creator)
Clone the files to you pc. Make sure that you are running node.js on your machine. 
[Node JS](https://nodejs.org/en)
Using a something like Virtual Studio Code, navigate to projects folder via the command line interface/terminal. Once inside, run 'npm install inquirer@8.2.4' to install the necessary package. There should now be a packag-lock.json file and a node modules folder in addition to what was cloned. You are ready to run the program.
[Jest](https://jestjs.io/) Next run 'npm install jest' Once this is completed, go into the package.json and make sure inside the scripts section it reads "test": "jest" 

## Usage
    Assuming you are still in the projects folder from installing the package you may run the program, type 'node index.js' into the CLI. You will then be prompted with a series of questions. Answer each question as it pertains to the question. Once all questions are answered, the CLI will read SVG file created successfully! A new file named logo.svg should have appeared in the output folder, containg an image with the parameters chosen.

    To run the jest tests, in the cli type 'npm test' This will intialize all the test suites and run the tests to make sure the functions work as expected. You should see 3 test suites passed, and 6 tests passed.
   

## Credits
    N/A

## Liscence
    N/A

## Code Source
    Code fully written by Thomas Neylon, references were made to previous classwork, and and the websites below.
    
[Validate in Inquirer](https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation)
   
[SVG using JS](hhttps://stackoverflow.com/questions/54081437/how-to-dynamically-create-svg-text-elements-using-js)


