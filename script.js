// Array of list of cards
let interviewList = [];
let rejectedList = [];

// console.log("Hello");
// Counters
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// Tab Buttons 
const allFilterBtn = document.getElementById('allFilterBtn');
const interviewFilterBtn = document.getElementById('interviewFilterBtn');
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn');

// console.log(totalCount.innerText);

const allCards = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
// console.log(mainContainer);

// console.log(allCards.children.length);

function calculateCounts() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
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

    document.getElementById(id).classList.remove('bg-white', 'text-[#64748B]');
    document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');
}


mainContainer.addEventListener('click', function(event) {
    console.log(event.target.parentNode.parentNode);
    // if (event.target.classList.contains('filter-btn')) {
    //     toggleStyle(event.target.id);
    // }
});
