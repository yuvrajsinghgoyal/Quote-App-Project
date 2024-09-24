let auth=document.querySelector(".auth")
let para=document.querySelector(".para")
let container=document.querySelector(".loading")

try {
    async function apifun(){
        container.innerHTML=`<h3 class="load">searching please wait...</h3>`
        const response=await fetch(`https://dummyjson.com/quotes/random`)
        const data= await response.json()
        container.style.display="none"
        console.log(data)
        auth.innerHTML=data.author
        para.innerHTML=data.quote
} 
apifun()
} catch (error) {
    container.innerHTML=`<h1>Error found ${error}</h1>`
}



