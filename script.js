// Array of list of cards
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// console.log("Hello");
// Counters
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// Tab Buttons 
const allFilterBtn = document.getElementById('allFilterBtn');
const interviewFilterBtn = document.getElementById('interviewFilterBtn');
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn');
const totalJobsCount = document.getElementById('totalJobsCount');

// console.log(totalCount.innerText);

const allCards = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filteredSection');
// console.log(mainContainer);

// console.log(allCards.children.length);

function calculateCounts() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    
    // Update totalJobsCount based on current tab
    if(currentStatus == 'allFilterBtn'){
        totalJobsCount.innerText = allCards.children.length;
    }
    else if(currentStatus == 'interviewFilterBtn'){
        totalJobsCount.innerText = interviewList.length;
    }
    else if(currentStatus == 'rejectedFilterBtn'){
        totalJobsCount.innerText = rejectedList.length;
    }
    else{
        totalJobsCount.innerText = allCards.children.length;
    }
}

calculateCounts();


function toggleStyle(id){
    // console.log('Clicked ', id);
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');



    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');

    currentStatus = id;

    document.getElementById(id).classList.remove('bg-white', 'text-[#64748B]');
    document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');

    if(id == 'interviewFilterBtn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        totalJobsCount.innerText = interviewList.length;
        renderInterview();
    }
    else if(id == 'allFilterBtn'){
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        document.getElementById('nothing').classList.add('hidden');
        totalJobsCount.innerText = allCards.children.length;
    }
    else if(id == 'rejectedFilterBtn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        totalJobsCount.innerText = rejectedList.length;
        renderRejected();
    }
}


mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('CardInterviewBtn')){
            // console.log(event.target.parentNode.parentNode);
        const parentDiv = event.target.parentNode.parentNode;
        const cardJobTitle = parentDiv.querySelector('.cardJobTitle').innerText;
        // console.log(cardJobTitle.innerText);
        const cardJobRole = parentDiv.querySelector('.cardJobRole').innerText;
        const cardJobDetails = parentDiv.querySelector('.cardJobDetails').innerText;
        const cardJobStatus = parentDiv.querySelector('.cardJobStatus').innerText;
        const cardJobDescription = parentDiv.querySelector('.cardJobDescription').innerText;

        // console.log(cardJobTitle, cardJobRole, cardJobDetails, cardJobStatus, cardJobDescription);
        const statusBtn = parentDiv.querySelector('.cardJobStatus');
        statusBtn.innerText = 'Interview';
        statusBtn.classList.remove('bg-[#EEF4FF]', 'text-[#EF4444]', 'text-[#002C5C]', 'bg-[#FEE2E2]');
        statusBtn.classList.add('bg-[#DCFCE7]', 'text-[#10B981]');

        const cardData = {
            cardJobTitle,
            cardJobRole,
            cardJobDetails,
            cardJobStatus: 'Interview',
            cardJobDescription
        }

        // console.log(cardData);

        const cardExist = interviewList.find(item => item.cardJobTitle == cardData.cardJobTitle);


        if(!cardExist){
            interviewList.push(cardData);
        }
        rejectedList = rejectedList.filter(item => item.cardJobTitle != cardData.cardJobTitle);
        // calculateCounts();
        
        if(currentStatus == 'rejectedFilterBtn'){
            renderRejected();
        }
        // console.log(interviewList);

        calculateCounts();

 
    }
    else if(event.target.classList.contains('CardRejectedBtn')){
            // console.log(event.target.parentNode.parentNode);
        const parentDiv = event.target.parentNode.parentNode;
        const cardJobTitle = parentDiv.querySelector('.cardJobTitle').innerText;
        // console.log(cardJobTitle.innerText);
        const cardJobRole = parentDiv.querySelector('.cardJobRole').innerText;
        const cardJobDetails = parentDiv.querySelector('.cardJobDetails').innerText;
        const cardJobStatus = parentDiv.querySelector('.cardJobStatus').innerText;
        const cardJobDescription = parentDiv.querySelector('.cardJobDescription').innerText;

        // console.log(cardJobTitle, cardJobRole, cardJobDetails, cardJobStatus, cardJobDescription);
        const statusBtn = parentDiv.querySelector('.cardJobStatus');
        statusBtn.innerText = 'Rejected';
        statusBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-[#DCFCE7]');
        statusBtn.classList.add('bg-[#FEE2E2]', 'text-[#EF4444]');

        const cardData = {
            cardJobTitle,
            cardJobRole,
            cardJobDetails,
            cardJobStatus: 'Rejected',
            cardJobDescription
        }

        // console.log(cardData);

        const cardExist = rejectedList.find(item => item.cardJobTitle == cardData.cardJobTitle);


        if(!cardExist){
            rejectedList.push(cardData);
        }
        interviewList = interviewList.filter(item => item.cardJobTitle != cardData.cardJobTitle);
        
        if(currentStatus == 'interviewFilterBtn'){
            renderInterview();
        }
        calculateCounts();

    }
    else if(event.target.closest('.cardDeleteBtn')){

        const deleteButton = event.target.closest('.cardDeleteBtn');
        const card = deleteButton.parentElement.parentElement;
        const cardTitle = card.querySelector('.cardJobTitle').innerText;

        interviewList = interviewList.filter(item => item.cardJobTitle != cardTitle);
        rejectedList = rejectedList.filter(item => item.cardJobTitle != cardTitle);


        card.remove() ;

        if(currentStatus == 'interviewFilterBtn'){
            renderInterview();
        }
        else if(currentStatus == 'rejectedFilterBtn'){
            
            renderRejected();
        }

        calculateCounts();
    }

    
});

function renderInterview(){
    filteredSection.innerHTML = '';

         if(interviewList.length == 0){
    document.getElementById('nothing').classList.remove('hidden');
 }
 else{    document.getElementById('nothing').classList.add('hidden');
 }

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'flex justify-between my-4 p-5 bg-white rounded-[5px]';
        div.innerHTML = `
        <div class="space-y-4">
                    <div>
                        <h3 class="cardJobTitle text-[#002C5C] font-bold text-[1.1rem]">${interview.cardJobTitle}</h3>
                        <p class="cardJobRole text-[#64748B]">${interview.cardJobRole}</p>
                    </div>
                    <p class="cardJobDetails text-[#64748B] text-[0.9rem]">${interview.cardJobDetails}</p>
                    <div>
                        <button class="cardJobStatus px-4 font-semibold mb-2 py-2 bg-[#DCFCE7] text-[#10B981] uppercase">${interview.cardJobStatus}</button>
                        <p class="cardJobDescription text-[#64748B] font-semibold">${interview.cardJobDescription}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="CardInterviewBtn bg-white border-2 border-[#10B981] text-[#10B981] rounded-[5px] px-5 py-1 cursor-pointer uppercase hover:bg-[#10B981] hover:text-white">Interview</button>
                        <button class="CardRejectedBtn bg-white border-2 border-[#EF4444] text-[#EF4444] rounded-[5px] px-5 py-1 cursor-pointer uppercase hover:bg-[#EF4444] hover:text-white">Rejected</button>
                    </div>
                </div>
                <div class="">
                    <button class="cardDeleteBtn border border-gray-300 rounded-full px-3 py-2 cursor-pointer hover:bg-red-200"><i class="fa-regular fa-trash-can text-gray-400"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }

}
function renderRejected(){
    filteredSection.innerHTML = '';

             if(rejectedList.length == 0){
    document.getElementById('nothing').classList.remove('hidden');
 }
 else{    document.getElementById('nothing').classList.add('hidden');
 }

    for(let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'flex justify-between my-4 p-5 bg-white rounded-[5px]';
        div.innerHTML = `
        <div class="space-y-4">
                    <div>
                        <h3 class="cardJobTitle text-[#002C5C] font-bold text-[1.1rem]">${reject.cardJobTitle}</h3>
                        <p class="cardJobRole text-[#64748B]">${reject.cardJobRole}</p>
                    </div>
                    <p class="cardJobDetails text-[#64748B] text-[0.9rem]">${reject.cardJobDetails}</p>
                    <div>
                        <button class="cardJobStatus px-4 font-semibold mb-2 py-2 bg-[#FEE2E2] text-[#EF4444] uppercase">${reject.cardJobStatus}</button>
                        <p class="cardJobDescription text-[#64748B] font-semibold">${reject.cardJobDescription}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="CardInterviewBtn bg-white border-2 border-[#10B981] text-[#10B981] rounded-[5px] px-5 py-1 cursor-pointer uppercase hover:bg-[#10B981] hover:text-white">Interview</button>
                        <button class="CardRejectedBtn bg-white border-2 border-[#EF4444] text-[#EF4444] rounded-[5px] px-5 py-1 cursor-pointer uppercase hover:bg-[#EF4444] hover:text-white">Rejected</button>
                    </div>
                </div>
                <div class="">
                    <button class="cardDeleteBtn border border-gray-300 rounded-full px-3 py-2 cursor-pointer hover:bg-red-200"><i class="fa-regular fa-trash-can text-gray-400"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }

}
