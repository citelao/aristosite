console.log(
  '%cThe Aristocats like web developers. You should join us. 😻😻',
  'font-weight: bold;'
);

console.log('There\'s no real call for JS on this page so I\'m just gonna log to the console.');
console.log('meow meow meow meow meow meow');

function showMenu() {
  var menu = document.getElementById("nav");

  if(menu.classList.contains("navigation--toggled")) {
    menu.classList.remove("navigation--toggled");
  } else {
    menu.classList.add("navigation--toggled");
  }
}
