// Navbar Toggle Menu

// Declare our element variables
const navBarToggle = document.querySelector('.toggle');
const menu = document.querySelector('nav ul');
console.log(menu)

// function statement
function menuToggle() {
  console.log('Menu is toggled');
  if (menu.classList.contains('active')){
    console.log("if")
    menu.classList.remove('active')
  } else {
    console.log('else')
    
    menu.classList.add('active');
  }
  // This line of code runs only when `button` is clicked. 
  // The 'visible' class will be removed/added (or toggled) each time this event handler is invoked
  // menu.classList.toggle('visible');
  // menu.classList.remove('item');
  // const trythis = document.querySelector('nav ul li');
  // console.log(trythis)
}

// The code in the `eventHandler` function (defined above) will be invoked each time `button` is clicked
navBarToggle.addEventListener('click', menuToggle, false);