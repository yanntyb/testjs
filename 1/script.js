let tab = document.getElementsByClassName("case")

for(cellule in tab){
    let cont = tab[cellule]
    console.log(cont)
    cont.addEventListener("click", function (event){
        if (cont.style.backgroundColor === "yellow") {
            cont.style.backgroundColor = "black"
            cont.style.border = "1px solid yellow"
        }
        else {
            cont.style.backgroundColor = "yellow"
            cont.style.border = "1px solid black"
        }
    })
}