# Code Challenge

## Synopsis
This was a code challenge for ROICode.  The plan was to create an app in two hours that could convert a sentence from English to Inflationary English.  An example would be:

* Input: “Today I won an award for being awesome.”
* Output: “Threeday I two an award five being awesome."

## Experience:
I started out building out the components and making sure that when I typed something into the input, the message would appear.  However, I did struggle with figuring out how to make it understand if a value sounds like a number.  Instead, I tried to worked from the beginning, by finding if the sentence even had a number.  If so, then replace that number with the next number.  The numbers only go from 1-10.  I then took some time to write out several tests to make sure things were appearing correctly.  However, I had an issue with getting Enzyme to work correctly after using create-react-app.  This made it much more difficult to write more tests that actually tell a story.

## Future Iterations:
I noticed that if the sentence was "I have two numbers that are three times bigger than yours.", it would only change the first number.  Now that I got the first one working, I would loop through the entire sentence and change the values of all numbers.

## Built With:
* React
