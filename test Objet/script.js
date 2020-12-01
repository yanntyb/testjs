function createTab(x,y,duration){
    let table = document.createElement("div");

    table.className = "cont";
    table.style.display = "flex";
    table.style.flexDirection = "row";
    table.style.width = "500px";
    table.style.height = "500px";
    table.style.border = "1px solid black"

    table.ligne = []
    for(let a = 0; a < x; a++) {
        let ligne = document.createElement("div");
        ligne.className = "ligne";
        ligne.style.width = "100%";
        table.appendChild(ligne);
        table.ligne.push(ligne);

        table.ligne.case = [];
        for (let b = 0; b < y; b++) {
            let slot = document.createElement("div");
            slot.className = "case";
            slot.style.width = "100%";
            slot.style.height = "calc(100% / " + x + ")";
            slot.position = [a,b];
            ligne.appendChild(slot);
            table.ligne.case.push(slot);
        };
    }

    table.afficher = function afficher(){
        document.body.appendChild(table)
    }
    table.afficherCase = function (position){
        let slot = table.ligne[position[0]].getElementsByClassName("case")[position[1]];
        slot.style.backgroundColor = "black"
        slot.style.animationName = "anim"
        slot.style.animationDuration = "1s"
    }

    return table
}

function recupPos(tab){
    let ligne = tab.ligne;
    for(let x of ligne) {
        let slot = x.getElementsByClassName("case")
        for(let y of slot){
            y.addEventListener("click",function (){
                tomber(tab,y.position)
            });
        };
    };
};

function returnValue(value){
    console.log(value)
    return value
}

function tomber(tab,position){
    let ligne = tab.ligne[position[0]];
    let slot = ligne.getElementsByClassName("case")[position[1]];
    while(slot.position[1] < ligne.getElementsByClassName("case").length){
        let slot = ligne.getElementsByClassName("case")[position[1]];
        position[1] += 1;
        setTimeout(function (){
            tab.afficherCase(slot.position)},50)
    }
}

let table = new createTab(100,100);

table.afficher()

recupPos(table)