/*if(window.innerWidth <= 415){
  alert("small")
} else{
  alert("big")
}
*/
var aside = document.querySelector("#translate"),
btn = document.querySelector("#sharebtn"),
btn2 = document.querySelector("#sharebtn2"),
aside2 = document.querySelector("#floating")
if (window.innerWidth <= 415) {
btn.addEventListener("click" , ()=>{
  aside.style.display = "flex"
  aside.style.right = "0"
})

btn2.addEventListener("click" , ()=>{
  aside.style.right = "-100%"
})
} else{
  btn.addEventListener("click", ()=>{
    aside2.classList.toggle("active")
  })
}
