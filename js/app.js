/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const $navBarList    = document.querySelector('#navbar__list');
const $AllSections   = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navigationBuilt = () => {

    let navCreate = '';

    $AllSections.forEach(section  => { 
        const sectionsIds = section.id;
        const sectionData = section.dataset.nav;
        navCreate += `<li><a class="menu__link" href="#${sectionsIds}">${sectionData}</a></li>`;
    });
    $navBarList.innerHTML = navCreate;

}
navigationBuilt();

// This function will remove class and it will deactive 
const deactivateState = (section) => {
  section.classList.remove('your-active-class');
  section.classList.remove('link__active');
}
// This function will addclass and it will active
const activeState = (section) => {
  section.classList.add('your-active-class');
  section.classList.add('link__active');

}
// Set sections as active
// Add class 'active' to section when near top of viewport
const sectionActiveState = () => {
    $AllSections.forEach(section => {
        let coordTop = Math.floor(section.getBoundingClientRect().top);
         booleanCoordTop = coordTop <= 200 && coordTop >= -200;

        if(booleanCoordTop) {
          activeState(section)
        
        }else {
          deactivateState(section)    
        }
    });

}

// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", sectionActiveState);

// Scroll to section on link click
const scrollTosectionId = () =>{
  document.querySelectorAll('.navbar__menu a').forEach(a => {
      a.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

}
scrollTosectionId();

//Add a scroll to top button on the page that’s 
//only visible when the user scrolls below the fold of the page.
//Get the button
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
