// calling element 
let totalNumber = document.getElementById("total-count");
let interviewNumber = document.getElementById("interview-count");
let rejectedNumber = document.getElementById("rejected-count");
// calling containers 
let allCard = document.getElementById("all-card");
let mainContainer = document.querySelector("main");
// calling buttons
let allBtn = document.getElementById("all");
let interviewBtn = document.getElementById("interview");
let rejectedBtn = document.getElementById("rejected");
// array of the interview and rejected tab 
let interviewList = []
let rejectedList =[]

function count(){
    totalNumber.innerText=allCard.children.length;
    interviewNumber.innerText=interviewList.length;
    rejectedNumber.innerText= rejectedList.length;}
count()

function toggleStyle(id){
    // removing style from all button 
    allBtn.classList.remove('btn-info','text-white')
    interviewBtn.classList.remove('btn-info','text-white')
    rejectedBtn.classList.remove('btn-info','text-white')
    let selectedBtn = document.getElementById(id)
    selectedBtn.classList.add('btn-info','text-white')
}