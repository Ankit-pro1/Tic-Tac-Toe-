// Import all required elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector('.player-x'),
selectOBtn = selectBox.querySelector('.player-o'),
playBoard = document.querySelector('.playboard'),
allBox = playBoard.querySelectorAll('section span'),
players = playBoard.querySelector('.player');

window.onload=()=>{
    for(let i = 0; i < allBox.length; i++){
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick=()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add('show');
    }
    selectOBtn.onclick=()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add('show');
        players.setAttribute("class", "player active playr");
    }
}

let playerOIcon = "fa-sharp fa-solid fa-o";
let playerXIcon = "fa-sharp fa-solid fa-x";

function clickedBox(element){
    if(players.classList.contains("playr")){
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    element.style.pointerEvents = "none";
}