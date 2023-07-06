let castButton = document.querySelectorAll(".roll");

let rand;
let rand1;
let rand2;
let castButton1Click = false;
let castButton2Click = false;
let reloadPage = document.getElementById("reload");

for (let i = 0; i < castButton.length; i++) {
    castButton[i].addEventListener("click", rollDice);
    
}


reloadPage.addEventListener("click", ReloadGame);

function rollDice(){
    //e.stopPropagation();
    const btn = this.dataset.btn;
    rand = Math.floor(Math.random() * 6) +1;
    const image  = this.previousElementSibling;
    image.setAttribute("src", "images/dice"+rand+".png");
    image.setAttribute("alt", rand);
    this.style.visibility = "hidden";
    if (btn === "1") {
        castButton1Click= true;
        rand1 = rand;
    } else {
        castButton2Click= true;
        rand2 = rand;
    }
    console.log(castButton1Click);
    console.log(castButton2Click);
    checkWinner();
}

function checkWinner(){
    if (castButton1Click && castButton2Click) {
        if (rand1 > rand2) {
            document.querySelector("h1").innerHTML="Player 1 wins";
        }
        else if (rand1 < rand2) {
                document.querySelector("h1").innerHTML="Player 2 wins";
        }
        else{
                document.querySelector("h1").innerHTML="Draw!";
        }
    }
    else{
        if (castButton1Click){
            document.querySelector("h1").innerHTML = "Player 2 to Roll";
        }
        else{
            document.querySelector("h1").innerHTML = "Player 1 to Roll";
        }
    }
}

function ReloadGame(){
    location.reload();
}