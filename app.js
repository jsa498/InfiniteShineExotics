const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.addEventListener('DOMContentLoaded', function () {
  // Select all service cards
  const cards = document.querySelectorAll('.services__card');

  cards.forEach(card => {
    // Get the inner card element that needs to be flipped
    const cardInner = card.querySelector('.card-inner');

    // Get the 'Learn More' and 'Back' buttons
    const learnMoreButton = card.querySelector('.learn-more');
    const backButton = card.querySelector('.learn-less');

    // Add click event to 'Learn More' button to flip to the back
    learnMoreButton.addEventListener('click', () => {
      cardInner.style.transform = 'rotateY(180deg)';
    });

    // Add click event to 'Back' button to flip back to the front
    backButton.addEventListener('click', () => {
      cardInner.style.transform = 'rotateY(0deg)';
    });
  });
});

// Get the modal
var modal = document.getElementById("bookingModal");

// Get the buttons that open the modal (Nav and About)
var btnNav = document.getElementById("booknow");
var btnAbout = document.getElementById("bookNowAbout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the "Book Now!" button in the navigation, open the modal
btnNav.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the "Book Now!" button in the About section, open the modal
btnAbout.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Call Now button action
document.getElementById("callNow").onclick = function() {
  window.location.href = "tel:+16047258010";
}

// Message Now button action
document.getElementById("messageNow").onclick = function() {
  window.location.href = "sms:+16047258010";
}

