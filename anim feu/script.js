

function definitionDiv(dimension){
    let cont = document.createElement("div")
    let div = document.getElementsByClassName("cont")[0]
    cont.className = "case"
    cont.style.position = "absolute";
    cont.style.top = Math.floor(Math.random()*300) + "px";
    cont.style.left = Math.floor(Math.random()*300) + "px";
    cont.style.width = dimension[0];
    cont.style.height = dimension[1];
    cont.style.backgroundColor = "black";
    cont.style.animationName = "disparition";
    cont.style.animationDuration  = "1s";
    cont.style.animationFillMode = "forwards";
    div.appendChild(cont);
    return(cont)
}

setInterval(function () {
    let random = Math.random()*100;
    let div = definitionDiv([random + "px", random +"px"]);
},20)

function recupDimension(cont){
    return cont.style.width.replace("px", "")
}


setInterval(function(){
    let listeDiv = document.getElementsByClassName("case")
    for(let i of listeDiv){
        i.style.opacity = "0"
        i.remove()
    }
},500)

