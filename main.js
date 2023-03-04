// Import all required elements
const selectBox = document.querySelector(".select-box"),
    selectXBtn = selectBox.querySelector('.player-x'),
    selectOBtn = selectBox.querySelector('.player-o'),
    playBoard = document.querySelector('.playboard'),
    allBox = playBoard.querySelectorAll('section span'),
    players = playBoard.querySelector('.player'),
    resultBox = document.querySelector(".result-box"),
    wonText = resultBox.querySelector(".won-text"),
    replyBtn = resultBox.querySelector(".result-box .btn");
let runBot = true;


window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add('show');
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add('show');
        players.setAttribute("class", "player active playr");
    }
}

let playerOIcon = "fa-sharp fa-solid fa-o";
let playerXIcon = "fa-sharp fa-solid fa-x";
let playerSign = 'X';

// User function
function clickedBox(element) {
    if (players.classList.contains("playr")) {
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }

    selectWinner() //Calling the winner function
    playBoard.style.pointerEvents = "none";

    element.style.pointerEvents = "none";
    let randomDelay = ((Math.random() * 1000) + 400).toFixed();
    console.log(randomDelay);
    setTimeout(() => {
        bot(runBot);
    }, randomDelay);
}

// Bot function
function bot(runBot) {
    if (runBot) {
        let array = [];
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++) {
            if (allBox[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains("playr")) {
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner() //Calling the winner function
        }
        allBox[randomBox].style.pointerEvents = "none";
    }
    playerSign = 'X';
    playBoard.style.pointerEvents = "auto";
    // console.log(randomBox);
    // console.log(array);
}

// Getting ID names
function getId(className) {
    return document.querySelector(".box" + className).id;
}

function checkThreeId(val1, val2, val3, sign) {
    if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true;
    }
}
function selectWinner() {
    if (checkThreeId(1, 2, 3, playerSign) || checkThreeId(4, 5, 6, playerSign) || checkThreeId(7, 8, 9, playerSign) || checkThreeId(1, 4, 7, playerSign) || checkThreeId(2, 5, 8, playerSign) || checkThreeId(3, 6, 9, playerSign) || checkThreeId(1, 5, 9, playerSign) || checkThreeId(3, 5, 7, playerSign)) {
        console.log(playerSign + " " + " is the winner");
        runBot = false;
        // bot(runBot);

        // let show the result box
        setTimeout(() => {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 800);
        console.log(playerSign);
        wonText.innerHTML = `Player <span>${playerSign}</span> won the match`;
    } else {
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "") {
            runBot = false;
            bot(runBot);
    
            // let show the result box
            setTimeout(() => {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 800);
            wonText.textContent = `Game has been draw`;
        }
    }
}

//Replay function
replyBtn.onclick = () => {
    window.location.reload();
}
