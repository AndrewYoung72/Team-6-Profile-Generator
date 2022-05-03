# Team-6-Profile-Generator


## Purpose
The purpose of this project was to create an application that would generate a team roster so a manager would have quick access to the team member's emails and GitHub profiles. We also needed to construct tests that would test the classes needed to create the application. We were provided with a file framework to organize our files, but no starter code.

## Description
This project contains four classes and corresponding test class for each. The employee class is the main class and the three alternative classes are extensions of the employee class. The tests contain three tests per class for a total of twelve tests. The tests are ran by entering npx jest in the terminal. I was not able to get run test to work. After running the command all twelve tests pass. In order to invoke the application you must enter node index.js and the user is prompted to enter the mangers name, id, email, and office number. After all the prompts are answered the user is presented with a list of options which can be navigted using the arrrow keys. The user has the option to create an engineer, intern, or finish the build. The engineer and intern share the same first three inputs as the manger but have a different final input. This final variable input is handled with a functin that generates the last property and inserts it into the generateHTML file. Once the user has finished entering employee data and the finish build option is selected, then the index.HTML page is generated. When veiwing the webpage both the email and GitHub links are functioning. 


## Lessons
The most difficult sections for me on this project were building the tests and generating the different questions for each employee and pushing them to an array. After my tutor helped me construct a function for one employee I understood how it was working and I was able to finish the remaining employee functions on my own. This process is something I have struggled with in the past but have a much better grasp of now. The testing was new for me and took some time to get passing tests. I learned to look at the error message the console was sending and try to adjust my test based on those fail messages. If I got a passing test for one class then I knew it would pass on the other classes if I had not made any mistakes.