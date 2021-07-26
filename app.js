const changeInput = document.querySelector(".input");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelectorAll(".btn");
const active = document.querySelector(".active");
const emailContent = document.querySelectorAll(".email-content");
const emailContainer = document.querySelector(".email-container");
const compose = document.querySelector(".compose");
const composeBox = document.querySelector(".compose-box");
const closeBtn = document.querySelector(".close-btn");
const mailbox = [
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Reyansh", inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id: "drafts"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Reyansh", inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id: "junk"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"inbox"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Reyansh", inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id: "junk"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"starred"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Reyansh", inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id: "inbox"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"inbox"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
    {checkbox:false, user: "Shreya",  inbox:"Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal", id:"sent" },
    {checkbox:false, user: "Shubham", inbox:"Mark Cuban is an American billionaire entrepreneur, television personality, and media proprietor", id:"inbox"},
    {checkbox:false, user: "Rishabh", inbox:"Please find attached your investment report from XYZ firm.", id:"snoozed"},
];

changeInput.addEventListener("click", function(){
    console.log("clicked")
changeInput.classList.add("inputChange");
});

changeInput.addEventListener("mouseleave", function(){
    changeInput.classList.remove("inputChange");
});

sidebar.addEventListener("click", function(e){
const id = e.target.dataset.id;
if(id){
btn.forEach(function(btn){
    btn.classList.remove("active");
})
 e.target.classList.add("active")
}

const newMailBox = mailbox.filter(function(newMail){
    return newMail.id===id;
})

removePreviousNode();
newMailBox.map(function(newMail){    
        const element =  document.createElement('div');
        element.classList.add('email-content');
        element.setAttribute("id", `${newMail.id}`);   
        emailContainer.appendChild(element); 
        const check = document.createElement("input");
        check.type="checkbox";
        element.appendChild(check);
        const para = document.createElement("p");
        para.innerText = `${newMail.user}`;
        para.classList.add("username");
        element.appendChild(para);
        const paraText  = document.createElement("p");
        paraText.classList.add("email-body");
        paraText.innerText = `${newMail.inbox}`
        element.appendChild(paraText);
}
);

function removePreviousNode(){
    document.querySelectorAll(".email-content").forEach(function(elem){
        elem.remove();
    })
}
});

compose.addEventListener("click", function(){
composeBox.classList.add("active-box");    
composeBox.classList.remove("remove-box");

});

closeBtn.addEventListener("click",function(){
    composeBox.classList.add("remove-box");
})
