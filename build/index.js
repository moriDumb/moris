const konhp = document.getElementById("konhp1")
const konh = document.getElementById("konhp")
const konten1 = document.getElementById("konten1")
const konhptp = document.getElementById("konhptp")
const konhp1tp =document.getElementById("konhp1tp")



konh.addEventListener("mouseenter", (event) => {
  const kop = konhp.style.display = "block";

   const kont = konten1.style.filter = "blur(0px)"

    setTimeout(() =>{
        konhp.style.animationPlayState ="paused"

    },3000);


    
});
