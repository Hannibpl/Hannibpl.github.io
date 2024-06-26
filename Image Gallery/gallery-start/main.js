const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* created an array of the image file names, including the const keyword */
const images = [
    'pic1.jpg', 
    'pic2.jpg', 
    'pic3.jpg', 
    'pic4.jpg', 
    'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'Closeup of a blue human eye', 
    'pic2.jpg' : 'Closeup of a wave of sand',
    'pic3.jpg' : 'Purple and White Flowers',
    'pic4.jpg' : 'Wall of An Egyptian Scripture',
    'pic5.jpg' : 'Closeup of a moth on a leaf',
}
/* looping through the array of images starting at 1 */

for(const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => { /* added an event listener for the "click" event on all thumbnails */
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt; 
    });
}
/* included an handler that will lighten/darken the button depending current value of const btnClass = btn.getAttribute*/

btn.addEventListener('click', () => {
    const bottonClass = btn.getAttribute('class');
    if (bottonClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else
     {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });