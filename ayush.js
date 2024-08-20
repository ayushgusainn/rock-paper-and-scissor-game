 let userScore=0;
 let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let scoreUser=document.querySelector("#user-score");
let scoreComp =document.querySelector("#comp-score");
let rest=document.querySelector("#rest");

rest.addEventListener("click",()=>{
    userScore= scoreUser.innerText=0;
    compScore= scoreComp.innerText=0;
    msg.innerText="Play your move";
    msg.style.backgroundColor="blue";
});

const draw=()=>{
    console.log("The game is draw");
    msg.innerText="GAME DRAW! PLAY AGAIN";
    msg.style.backgroundColor="";
    
}
const win=(users,comp)=>{
    console.log("you win!",);
    msg.innerText=`you win ${users} beats ${comp}`;
    msg.style.backgroundColor="green";
   userScore++;
   scoreUser.innerText=userScore;
}

const lose=(users,comp)=>{
    console.log("you lose!");
    msg.innerText=`YOU LOSE! ${comp} beats yours ${users}`;
    msg.style.backgroundColor="red";
    compScore++
    scoreComp.innerText=compScore;
}


let winPattern=(users,comp)=>
    {
if(users===comp){
    draw();
}
else if ( users==="scissor" && comp==="paper")
    {
    win(users,comp);

}
else if ( users==="scissor" && comp==="rock")
    {
    lose(users,comp);
}
else if ( users==="rock" && comp==="paper")
    {
   lose(users,comp);
}
else if ( users==="rock" && comp==="scissor")
    {
    win(users,comp);
}
else if ( users==="paper" && comp==="rock")
    {
    win(users,comp);
}
else{
    lose(users,comp);
}
}

const compChoice=()=>{

    const arr=["rock","paper","scissor"];
let aru=Math.floor(Math.random()*3);
console.log("comp choice is ",arr[aru]);
return arr[aru];
}


const userChoice=(user)=>{
    console.log("user choice=",user);
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let user=choice.getAttribute("id");
    userChoice(user);
   let comp= compChoice();
winPattern(user,comp);

    
    });
});