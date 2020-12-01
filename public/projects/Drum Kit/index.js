// This for loop assigns each button with the event listener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var keyPressed = this.innerHTML;
        soundKey(keyPressed);
        animationButton(keyPressed);
    });
}
//This function over here will bind keyboard press button to the sound
document.addEventListener("keypress",function(event){
    soundKey(event.key);
    animationButton(event.key);
});


//This is the function that links the sound to a letter
function soundKey(wordPressed){
    switch (wordPressed) {
        case "w":
            wAudio = new Audio('sounds/tom-1.mp3');
            wAudio.play();
            break;
        case "a":
            aAudio = new Audio('sounds/tom-2.mp3');
            aAudio.play();
            break;
        case "s":
            sAudio = new Audio('sounds/tom-3.mp3');
            sAudio.play();
            break;
        case "d":
            dAudio = new Audio('sounds/tom-4.mp3');
            dAudio.play();
            break;
        case "j":
            jAudio = new Audio('sounds/snare.mp3');
            jAudio.play();
            break;
        case "k":
            kAudio = new Audio('sounds/kick-bass.mp3');
            kAudio.play();
            break;
        case "l":
            lAudio = new Audio('sounds/crash.mp3');
            lAudio.play();
            break;
        default:
            audio= new Audio('sounds/beep.wav');
            audio.play();
        break;
    }
}

// Creating Button animation
function animationButton(currentKey){
    document.querySelector("."+currentKey).classList.toggle("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.toggle("pressed"); 
    },100);
}