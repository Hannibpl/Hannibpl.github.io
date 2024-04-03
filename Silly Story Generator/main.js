/* created the main.js file that was implemented by the index.html file */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
} 
/* created the storyText variable and insertX, insertY, and insertZ variable */
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result); 
/* copied the provided event handler and incomplete function in main.js */
function result() {
    let newStory = storyText; /* Created a new variable newStory that's equal to storyText */

    const xItem = randomValueFromArray(insertx); /* created 3 variables xitem, yItem and zItem and added randomValueFromArray from the insert variables */
    const yItem = randomValueFromArray(inserty); 
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:', xItem); /* Added newStory.replaceAll() function call to replace :insertx:, :inserty: and :insertz: */
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name); /* if a user enters a name in the cutomname text input, replacces "Bob" */

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stone`; /* converts the 300lb to its equivalent in "stones" */
    const temperature =  `${Math.round((94 - 32) * 5 / 9)} centigrade`; /* converts the 94 degrees fahrenhiet to its equivalent in centigrade */
    newStory = newStory.replaceAll('94 fahrenheit', temperature)
    newStory = newStory.replaceAll('300 pounds', weight);
    }

  story.textContent = newStory; /* sets the story.textContent equal to the modified newStory variable */
  story.style.visibility = 'visible';

}