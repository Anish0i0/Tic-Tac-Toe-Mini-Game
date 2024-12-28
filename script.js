let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button")
let turnO = true;
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgamebtn");
let count = 0;


const winningptrn = [
    [0, 1, 3],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    trunO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++; 

        let iswinner = checkWinner();
         if(count === 9 && !iswinner){
            gamedraw();
         }


    });
});


const gamedraw = () => {
    msg.innerText = `game was Draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}



const checkWinner = () => {
    for(let pattern of winningptrn) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

