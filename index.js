const konh1  = document.getElementById("konh1")
const konh1p  = document.getElementById("konh1p")
const hider = document.querySelector("aaa")

konh1.innerHTML = "VIOLET EVERGARDEN"
konh1p.innerHTML = "—Violet's greeting to her clients.";

konh1.addEventListener(
    "mouseenter",
    (event) =>{
        konh1.style.color = "pink"

        setTimeout(() =>{
            konh1.style.color = "wheat"
        },8000)
    }
)

konh1p.addEventListener(
    "mouseenter",
    (event) =>{
        konh1p.innerHTML = "It is a pleasure to meet you. If it is your wish, I will travel anywhere to meet your request. Auto Memory Doll, Violet Evergarden, at your service."
       konh1p.style.color = "pink"
        setTimeout(() =>{
            konh1p.innerHTML = "—Violet's greeting to her clients."
        },10000)
    }
)







