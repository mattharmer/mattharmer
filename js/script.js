
var menu = document.getElementById(menu);
var nav = document.getElementById(nav);
var exit = document.getElementById(exit);


  menu.addeventListener('click', function(e) {
  nav.classList.toggle('hideMobile');
  alert("Hello! Alert!");
  e.preventDefault();
  });
}

if (exit) {
exit.addeventListener('click', function(e) {
nav.classList.add('hideMobile');
e.preventDefault();
});
}
