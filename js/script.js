// Select the elements we want to show or hide
var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('.menu');
var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');


// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
mobileBtn.addEventListener('click', function(){
  menu.className += ' open';
  overlay.className += ' open';
})


// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
})

// If a user clicks outside the menu on the overlay it will also trigger the event
// to hide the menu and overlay elements
window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    overlay.className = 'overlay';
  }
})
