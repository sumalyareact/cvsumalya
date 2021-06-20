// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
var firebaseConfig = {
  apiKey: "AIzaSyCdPJ1kL5j--GgV5yirYtXgcYvQsGuZLF4",
  authDomain: "cv-dev-68724.firebaseapp.com",
  databaseURL : "https://cv-dev-68724-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "cv-dev-68724",
  storageBucket: "cv-dev-68724.appspot.com",
  messagingSenderId: "656868644300",
  appId: "1:656868644300:web:c364e8ea0b61293f91b969"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");


  
  
document.querySelector(".form_main").addEventListener("submit", sf);

function sf(e) {
  e.preventDefault();
  



let nameFetch = document.querySelector("#name_id").value;
let subjectFetch = document.querySelector("#subject_id").value;
let emailFetch = document.querySelector("#email_id").value;
let messageFetch = document.querySelector("#message_id").value;

console.log(nameFetch,subjectFetch,emailFetch, messageFetch);

saveContactInfo(nameFetch,subjectFetch,emailFetch, messageFetch);
document.querySelector(".form_main").reset();
alert('Thank you for contacting me. I will get back to you soon.');

};

function saveContactInfo(nameFetch,subjectFetch,emailFetch, messageFetch){
  let newContactInfo= contactInfo.push();

  newContactInfo.set({
    name : nameFetch,
    subject : subjectFetch,
    email : emailFetch,
    message : messageFetch,
  });
}

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
