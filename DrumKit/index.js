var drumkits = document.querySelectorAll(".drum");

for (let i = 0; i < drumkits.length; i++) {
    drumkits[i].addEventListener("click", function(){
        let key = this.innerHTML;
        makeSound(key);
        animateKey(key);
    });
    
}

document.addEventListener("keypress", function(e){
makeSound(e.key);
animateKey(e.key);
})

function makeSound(key) {
    switch (key) {
        case "q":
            var sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        
        case "w":
            var sound1 = new Audio("sounds/tom-2.mp3");
            sound1.play();
            break;
        case "e":
            var sound1 = new Audio("sounds/tom-3.mp3");
            sound1.play();
            break;
        case "r":
            var sound1 = new Audio("sounds/tom-4.mp3");
            sound1.play();
            break;
                    
        case "t":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case "y":
            var sound1 = new Audio("sounds/kick-bass.mp3");
            sound1.play();
            break;
        
        case "u":
            var sound1 = new Audio("sounds/snare.mp3");
            sound1.play();
            break;
        default:
            break;
    }
}

function animateKey(key) {
    var pressedKey = document.querySelector("."+ key);
    if (pressedKey !== null){
        pressedKey.classList.add("pressed");
        setTimeout(() => {
            pressedKey.classList.remove("pressed");
        }, 100);
    }
    else{
        alert("invalid key");
    }
}