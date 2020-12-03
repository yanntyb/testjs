let div = document.getElementById("barre");
let carre = document.getElementById("carre");

carre.addEventListener("mousemove", function (){
    let x = carre.style.left
    console.log(x);
    if(parseInt(carre.style.left.replace("px", "")) < parseInt(div.style.width.replace("px", ""))) {
        //carre.style.left = event.clientX + "px";
    }
})