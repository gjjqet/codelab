const imagecontainer=document.querySelector(".imagecontainer");
const click=document.querySelector(".click");
const image=document.querySelector(".image");
const original=image.src;
console.log(original)

const images=[
    "../../image/flower2.jpg",
    "../../image/cover4.jpg",
    "../../image/apple.webp",
    "../../image/cover3.jpg"
]

let counter=0;
click.addEventListener("click",()=>{
    if(counter===4){
        image.src=original;
        counter=0;
        return;
    }
image.src=images[counter]
counter+=1
})