let welcomebtn = document.getElementById("welcome-signin-btn");
let infodiv = document.getElementById("signin-outerdiv");
let firstdivbtn = document.getElementById("welcome-btn");
let welcomediv = document.getElementById("welcome-signin");
let back = document.getElementById("back-btn");
let themechange = document.getElementById("theme");
let color = 0;

welcomebtn.addEventListener("click",()=>{
    infodiv.style.display="flex";
    welcomediv.style.display="none";
});

back.addEventListener("click",()=>{
    infodiv.style.display="none";
    welcomediv.style.display="flex";
});

themechange.addEventListener("click",()=>{
    if(color==0){
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        themechange.innerHTML="&#127769; Dark";
        color=1;
    }else{
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        themechange.innerHTML="&#127774; Light";
        color=0;
    }
});