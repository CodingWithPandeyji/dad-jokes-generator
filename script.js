const p=document.querySelector("p");
const btn=document.querySelector("button")

function show(){
fetch("https://v2.jokeapi.dev/joke/Any?type=single")
.then((response)=>{return response.json()})
.then((result)=>{
    p.textContent="..loading jokes"
   
    setTimeout(()=>{
            p.textContent=result.joke
    },1000)
})

}





btn.addEventListener("click",show)

