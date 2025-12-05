// Selected Elements
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const modalTaskArea = document.querySelector(".textArea-cont");
const mainTicketContainer = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color ");
const modalDueDateInput = document.querySelector("#dueDateInput");
console.log(modalDueDateInput)

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];




const colors = ["lightpink", "lightgreen", "lightblue", "black"];
const LStickets = JSON.parse(localStorage.getItem('myTickets')) || []
const ticketsArr = LStickets;


let ticketColor = "lightpink";

// lock Classes
let openedLock = "fa-lock-open";
let closedLock = "fa-lock";

// Tickets from LS
function init(){
  LStickets.forEach(function(ticket){
     generateTicket(ticket.ticketTask , ticket.ticketId , ticket.ticketColor)
  })
}
init()

//flags
let modalFlag = false;

// This Event opens and closes the Modal
addBtn.addEventListener("click", function () {
  // Modal Pops up
  if (modalFlag == false) {
    modalCont.style.display = "flex";
    modalFlag = true;
  } else {
    modalCont.style.display = "none";
    modalFlag = false;
  }

  // Modal Hides
});

// Create ticket - ticket Generation
function generateTicket(task, id , color , dueDate) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = ` 
  <div class="ticket-color" style="background-color: ${color};" ></div>
  <div class="ticket-id">${id}</div>
  <div  class="task-area">${task}</div>
  <div class='due-date'>${dueDate}</div>
   <div class="ticket-lock">
     <i class="fa-solid fa-lock"></i>
</div>`;

  mainTicketContainer.appendChild(ticketCont);

  handleLock(ticketCont);
  handleColor(ticketCont);
}

//
modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    const taskFromModal = modalTaskArea.value;
    const id = shortid(); // ksdgvku
    const color = ticketColor;
    const dueDateVal = modalDueDateInput.value; // new
    console.log('addedDate -> ',  dueDateVal)
    
    const formattedDate = formatDate(dueDateVal)

    generateTicket(taskFromModal, id , color , formattedDate);

    modalCont.style.display = "none";
    modalFlag = false;
    modalTaskArea.value = "";

    ticketsArr.push({
      ticketId: id,
      ticketTask: taskFromModal,
      ticketColor: color,
      ticketDueDate: dueDateVal, 
    });

    console.log(ticketsArr);

     localStorage.setItem('myTickets' , JSON.stringify(ticketsArr))
  }
});

allPriorityColors.forEach(function (colorItem) {
  colorItem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priortyColor) {
      priortyColor.classList.remove("active");
      colorItem.classList.add("active");
    });

    ticketColor = colorItem.classList[0]; // lightgreen
  });
});

// handle Lock

function handleLock(ticket) {
  const lockContainer = ticket.querySelector(".ticket-lock");
  const lockIcon = lockContainer.children[0];
  const taskArea = ticket.querySelector(".task-area");

  lockIcon.addEventListener("click", function () {
    if (lockIcon.classList.contains(closedLock)) {
      lockIcon.classList.remove(closedLock);
      lockIcon.classList.add(openedLock);
      taskArea.setAttribute("contenteditable", true);

      // task can be edited
    } else {
      lockIcon.classList.remove(openedLock);
      lockIcon.classList.add(closedLock);
      // task should be fixed
      taskArea.setAttribute("contenteditable", false);
    }
  });
}

// change priority color
function handleColor(ticket) {
  const ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function () {
    const currentColor = ticketColorBand.style.backgroundColor;
    const currColorIndex = colors.indexOf(currentColor); // 3
    const newColorIdx = (currColorIndex + 1) % colors.length;
    const newColor = colors[newColorIdx];
    ticketColorBand.style.backgroundColor = newColor;
  });
}


function formatDate(dueDate){
  const d = new Date(dueDate);
  console.log("recieved Date-> " , d) 
  const year = d.getFullYear()
  const monthIndex =  d.getMonth()
  const monthName = months[monthIndex]
  const date = d.getDate()

  console.log(year)
  console.log(monthName)
  console.log(date)

return date + '/' +monthName+ '/'+year
}

