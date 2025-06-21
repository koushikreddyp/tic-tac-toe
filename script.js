let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let xpoint = document.getElementById("px");
let opoint = document.getElementById("po");
let tie = document.getElementById("tie1");
let winner = false;
let turnX = true; 
const winPattrens = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];



const disableBox = () => {
    for(box of boxes){
        if(winner){
            box.disabled = true;
        }
    }
}

const enableBox = () => {
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
        
    }
}

resetBtn.addEventListener("click", () => {
    turnX = true;
    winner = false;
    enableBox();
    resetBtn.innerHTML = "Reset game";
});

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnX == true){
            box.innerHTML = "X";
            turnX = false;
        }else {
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
        disableBox();
    });
    
});


const checkWinner = () => {
    for(pattern of winPattrens){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                winner = true;
                resetBtn.innerHTML = "New Game";
                let oscore = 1;
                if(pos1 === "X"){
                    let xscore = Number(xpoint.innerText);
                    xscore += 1;
                    xpoint.innerText = xscore;
                }
                else if (pos1 === "O"){
                    let oscore = Number(opoint.innerText);
                    oscore += 1;
                    opoint.innerText = oscore;
                }
            }
        }
    }
    
}

