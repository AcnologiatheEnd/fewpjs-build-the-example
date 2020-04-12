// Defining text characters for the empty and full hearts for you to use later.
//const EMPTY_HEART = '♡'
//const FULL_HEART = '♥'

// Your JavaScript code goes here!
//this controls the shading
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};
// this object controls the color of the like 
let colorStates = {
  "red" : "",
  "": "red"
};

// this variable will take all the like classes so we can use them
let articleHearts = document.querySelectorAll('.like');

// this function will be changing the state of the like button once called upon. It will also notify the user of any changes
function likeCallback(e) {
  let heart = e.target;
    mimicServerCall()
    
    .then(function(serverMessage){
      alert("You notified the server!");
       alert(serverMessage);
       
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// creates a listener for all the like classes we've gathered
for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

// I believe this will create a dummy server for our js code to work on 
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
