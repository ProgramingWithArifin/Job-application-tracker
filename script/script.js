let totalNumber = document.getElementById("total-count");
let interviewNumber = document.getElementById("interview-count");
let rejectedNumber = document.getElementById("rejected-count");
let allCard = document.getElementById("all-card")
function count(){
    totalNumber.innerText=allCard.children.length
}
count()