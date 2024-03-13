const buttonTag=document.getElementsByClassName("fas")[0]
const imageTag=document.getElementsByClassName("image")[0]
const orginal=imageTag.src

const imagecontainer=[
    "https://image.tmdb.org/t/p/w500/dw2in9h6auSOZ8EWZs1gqqs3KRA.jpg",
    "https://i.pinimg.com/736x/03/c2/84/03c284ef432274bcf05e46b80e03f30c.jpg",
    "https://pbs.twimg.com/media/FURTmxrXwAkgWtD.jpg",
    "https://pbs.twimg.com/media/EVqmdhzWoAMrkY3.jpg",
]

let counter=0
buttonTag.addEventListener("click",()=>{
    if(counter===4){
        imageTag.src=orginal
        counter=0
        return
    }
    imageTag.src=imagecontainer[counter]
    counter+=1
})



