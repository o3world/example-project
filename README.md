# Test React Application

* User can select one or multiple tests to take at once
* User will go through a series of questions based on test selected and will answer those questions to record
  * Each page/section will show one question/answer to the user
  * If the user refreshes, must be able to keep track of where user left off
  * Will need a summary page to showcase the user's answers to the questions and show a PASS or FAIL

# Goals for Pull Request

* Look to see how we can refactor from the current setup where each test selected will show it's individual page with all questions shown. Ultimately, will need to created a shared component to go through each test, show one question/answer based on tests selected with previous/next buttons
* Looking for improvements on current code and/or recommendations to help acheive bullet item #1. That entails third-party plugins we can use, creative logic to use as a service, and etc.
* Looking for best practices, DRY, and clean code implementations on the code base itself. That entails for both React and Typescript
