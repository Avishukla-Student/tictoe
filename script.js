let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let winContainer=document.querySelector(".win-container");
let massage=document.querySelector("#winner");
let newBtn=document.querySelector("#new-game");

let turnO =true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetbtn=()=>{
    turnO=true;
    enablebtns();
    winContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turnO){
        box.style.color="red";
        box.innerText="O";
        turnO=false;
       } else {
        box.innerText="X";
        box.style.color="blue";
        turnO=true;
       }
       box.disabled=true;

       checkWinner();
    });
} );

const enablebtns=() =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const disBoxes=() => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner=(winner) => {
    massage.innerText=`Congratulations, Winner is ${winner}`;
    winContainer.classList.remove("hide");
    disBoxes();
};

const checkWinner=()=> {
    for(let pattern of winPatterns){
        let pas1Val=boxes[pattern[0]].innerText;
        let pas2Val=boxes[pattern[1]].innerText;
        let pas3Val=boxes[pattern[2]].innerText;  
        
        if(pas1Val!=""&& pas2Val!="" && pas3Val!=""){
            if(pas1Val===pas2Val&&pas2Val===pas3Val){
                showWinner(pas1Val);
                
            }
        }

    }
};

newBtn.addEventListener("click", resetbtn);
resetb.addEventListener("click", resetbtn);
