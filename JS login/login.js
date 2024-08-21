let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let submitBtn = document.getElementById("submit-btn")
let outputName = document.getElementById("output-span")

submitBtn.addEventListener("click",()=>{
    outputName.innerText = firstName.value + " " + lastName.value;
});