// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('closebtn');
const sideMenu = document.querySelector(".sidemenu");

openbtn.addEventListener("click",function(){
    sideMenu.style.display = "block";
    openbtn.style.display = "none";
    closebtn.style.display = "block";
});
closebtn.addEventListener("click",function(){
    sideMenu.style.display = "none";
    closebtn.style.display = "none";
    openbtn.style.display = "block";
});


function opentab(tabname){
    if(tabname === "skills"){
        document.querySelector(".skills").classList.add('activelink');
        document.querySelector(".education").classList.remove("activelink");
        document.querySelector("#skills").classList.add('activetab');
        document.querySelector("#education").classList.remove("activetab");
      
        

    }else{
        document.querySelector(".education").classList.add('activelink');
        document.querySelector(".skills").classList.remove("activelink");
        document.querySelector("#education").classList.add('activetab');
        document.querySelector("#skills").classList.remove("activetab");
    }
    
}