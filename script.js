const num = document.querySelector("#cont");

num.addEventListener("click", shownum);

function shownum(){
    if(num.textContent === "Contact no."){
        num.textContent = "7206153033";
    }else{
        num.textContent = "Contact no.";
    }
}



