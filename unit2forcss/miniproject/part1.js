const barcontainer=document.querySelector('.barcontainer');
const bar1=document.querySelector(".bar1");
const bar2=document.querySelector(".bar2");
const bar3=document.querySelector(".bar3");
const extranav=document.querySelector(".extranav");
const date=document.querySelector(".apple");

barcontainer.addEventListener("click",()=>{
    
    if(barcontainer.classList.contains("add")){
        extranav.style.display="none";
        bar1.classList.remove("changebar1");
        bar2.classList.remove("hidebar2");
        bar3.classList.remove("changebar3");
        barcontainer.classList.remove("add");
    }
    else{
        extranav.style.display="block";
        bar2.classList.add('hidebar2');
        bar1.classList.add("changebar1");
        bar3.classList.add("changebar3");
        barcontainer.classList.add("add");
    }
})

date.innerText=new Date().getFullYear();