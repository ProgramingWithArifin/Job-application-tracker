// calling element 
let totalNumber = document.getElementById("total-count");
let interviewNumber = document.getElementById("interview-count");
let rejectedNumber = document.getElementById("rejected-count");
// calling containers 
let allCard = document.getElementById("all-card");
let mainContainer = document.querySelector("main");
let filteredSection = document.getElementById("filtered-section")
// calling buttons
let allBtn = document.getElementById("all");
let interviewBtn = document.getElementById("interview");
let rejectedBtn = document.getElementById("rejected");
// array of the interview and rejected tab 
let interviewList = [];
let rejectedList =[];
function toggleStyle(id){
    // removing style from all button 
    allBtn.classList.remove('btn-info','text-white')
    interviewBtn.classList.remove('btn-info','text-white')
    rejectedBtn.classList.remove('btn-info','text-white')
    let selectedBtn = document.getElementById(id)
    selectedBtn.classList.add('btn-info','text-white')

    if(id == 'all'){
        allCard.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }else if(id == 'interview'){
        allCard.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderInterview()
    }else if (id == 'rejected'){
        allCard.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderRejected();
    }
}
function count(){
    totalNumber.innerText=allCard.children.length;
    interviewNumber.innerText=interviewList.length;
    rejectedNumber.innerText= rejectedList.length;}
count()

mainContainer.addEventListener('click', function(event){
    // interviewBtn click 
    if(event.target.classList.contains('btn-success')){
        let parent= event.target.parentNode.parentNode;
        let title = parent.querySelector('.title h2').innerText;
        let role = parent.querySelector('.title p').innerText;
        let salary = parent.querySelector('.salary').innerText;
        let statusEl = parent.querySelector('.applyStatus');
        let status = parent.querySelector('.applyStatus').innerText;
        let note = parent.querySelector('.note').innerText;
        let cardInfo ={
            title, 
            role, 
            salary, 
            status:'Interview', 
            note};

        const interviewExist = interviewList.find(item=> item.title == cardInfo.title)
        statusEl.innerText ="Interview";
        statusEl.classList.remove("text-red-600");
        statusEl.classList.add("text-green-600");

        if(!interviewExist){
            interviewList.push(cardInfo);
        }
        count()
        renderInterview()
        }
    // rejected btn clicked 
        if(event.target.classList.contains('btn-error')){
        let parent= event.target.parentNode.parentNode;
        let title = parent.querySelector('.title h2').innerText;
        let role = parent.querySelector('.title p').innerText;
        let salary = parent.querySelector('.salary').innerText;
        let statusEl = parent.querySelector('.applyStatus');
        let status = parent.querySelector('.applyStatus').innerText;
        let note = parent.querySelector('.note').innerText;
        let cardInfo ={
            title, 
            role, 
            salary, 
            status:'Rejected', 
            note};

        const rejectedExist = rejectedList.find(item=> item.title == cardInfo.title)
        statusEl.innerText ="Rejected";
        statusEl.classList.remove("text-green-600");
        statusEl.classList.add("text-red-600");

        if(!rejectedExist){
            rejectedList.push(cardInfo);
        }
        count()
        renderRejected()
        }

})

function renderInterview(){
    filteredSection.innerHTML='';
    if(interviewList.length == 0){
        let div = document.createElement("div");
        div.className= "py-15 text-center space-y-5";
        div.innerHTML=`            
            <img class="mx-auto" src="assets/jobs.png" alt="">
            <h2 class="font-bold text-3xl text-[#002c5c] max-sm:text-2xl">No jobs available</h2>
            <p class="text-gray-600">Check back soon for new job opportunities</p>`;
        filteredSection.append(div)
    }
    for(let card of interviewList){
        let div = document.createElement("div");
        div.className = 'cards flex justify-between items-start hover:border-[#002c5c] max-md:flex-col max-md:gap-4 max-sm:p-4 rounded p-8 bg-white border border-[#f1f2f4FF]'
        div.innerHTML =`
        <div class="left space-y-5">
                        <div class="title">
                            <h2 class="text-[#002c5c] text-2xl font-semibold">${card.title}</h2>
                            <p class="text-gray-600">${card.role}</p>
                            
                        </div>
                        <div class="status-detais">
                            <p class="text-gray-600 salary">${card.salary}</p>
                            <p class="applyStatus badge badge-outline text-green-600 font-bold p-4 max-sm:p-2">${card.status}</p>
                            <p class="note">${card.note}</p>
                        </div>
                        <div class="buttons">
                            <button class="btn btn-outline btn-success">Interview</button>
                            <button class="btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div class="right "><button class="btn w-10 btn-outline btn-secondary h-10"><i class="fa-regular fa-trash-can"></i></button></div>
        `;
        filteredSection.append(div)
    }
}

function renderRejected(){
    filteredSection.innerHTML='';
    if(rejectedList.length == 0){
        let div = document.createElement("div");
        div.className= "py-15 text-center space-y-5";
        div.innerHTML=`            
            <img class="mx-auto" src="assets/jobs.png" alt="">
            <h2 class="font-bold text-3xl text-[#002c5c] max-sm:text-2xl">No jobs available</h2>
            <p class="text-gray-600">Check back soon for new job opportunities</p>`;
        filteredSection.append(div)
    }
    for(let card of rejectedList){
        let div = document.createElement("div");
        div.className = 'cards flex justify-between items-start hover:border-[#002c5c] max-md:flex-col max-md:gap-4 max-sm:p-4 rounded p-8 bg-white border border-[#f1f2f4FF]'
        div.innerHTML =`
        <div class="left space-y-5">
                        <div class="title">
                            <h2 class="text-[#002c5c] text-2xl font-semibold">${card.title}</h2>
                            <p class="text-gray-600">${card.role}</p>
                            
                        </div>
                        <div class="status-detais">
                            <p class="text-gray-600 salary">${card.salary}</p>
                            <p class="applyStatus badge badge-outline text-red-600 font-bold p-4 max-sm:p-2">${card.status}</p>
                            <p class="note">${card.note}</p>
                        </div>
                        <div class="buttons">
                            <button class="btn btn-outline btn-success">Interview</button>
                            <button class="btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div class="right "><button class="btn w-10 btn-outline btn-secondary h-10"><i class="fa-regular fa-trash-can"></i></button></div>
        `;
        filteredSection.append(div)
    }}