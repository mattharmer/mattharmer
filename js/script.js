// Select the elements we want to show or hide
let mobileBtn = document.querySelector('.mobile-btn');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');
let closeBtn2 = document.querySelector('.close2');
let closeBtn3 = document.querySelector('.close3');
let overlay = document.querySelector('.overlay');

// When the user clicks on the hamburger icon the 'open' class is added to both the menu and overlay elements making them visible and triggering the animation
mobileBtn.addEventListener('click', function(){
  menu.className += ' open';
  overlay.className += ' open';
})

// When the close button is clicked the 'open' class is removed from both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
})

// Same as above, but closes the overlay when projects selected.
closeBtn2.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
})

// Closes the overlay when contact selected.
closeBtn3.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
})

// If a user clicks outside the menu on the overlay it will also trigger the event to hide the menu and overlay elements
window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    overlay.className = 'overlay';
  }
})
