const addbutton=document.querySelector(".btn");
const extraphone=document.querySelector(".extraphone");


addbutton.addEventListener("click",()=>{
    const parent=document.createElement("div")
    parent.classList.add("parent")

    const label=document.createElement("label")
    label.textContent="Phone Number";

    const inputTag=document.createElement("input");
    inputTag.classList.add("form-control")
    inputTag.placeholder="Enter your phone number";

   const removebutton=document.createElement("button")
   removebutton.classList.add("btn","btn-danger");
   removebutton.textContent="remove";

   parent.append(label,inputTag,removebutton);
   extraphone.append(parent);


   removebutton.addEventListener("click",()=>{
   
    parent.style.display="none";
   })

})




