function createTab(x,y,duration){
    let table = document.createElement("div");

    table.className = "cont";
    table.style.display = "flex";
    table.style.flexDirection = "row";
    table.style.width = "500px";
    table.style.height = "500px";
    table.style.border = "1px solid black"

    for(let a = 0; a < x; a++) {
        let ligne = document.createElement("div")
        ligne.className = "ligne";
        ligne.style.width = "100%";
        table.appendChild(ligne);

        for (let b = 0; b < y; b++) {
            let slot = document.createElement("div");
            slot.className = "case";
            slot.style.width = "100%";
            slot.style.height = "calc(100% / " + x + ")";
            slot.position = [a,b]

            // animation
            slot.addEventListener("click",function (event){
                anim(slot,duration)

                //propagation
                let slotadjacent = adjacent(slot.position)
                console.clear()
                for (let i = 0;i < slotadjacent.length;i++){
                    try {
                        let ligne = document.getElementsByClassName("ligne")[slotadjacent[i][0]]
                        let slot = ligne.getElementsByClassName("case")[slotadjacent[i][1]]
                        anim(slot, duration, 0.5)
                    }catch {
                        console.log("case non definie")
                    }
                }

            })

            ligne.appendChild(slot);
        }
    }
    return table
}

table = createTab(10, 10, 0.8)

document.body.appendChild(table)

function adjacent(position){
    let table = []

    //droite
    table[0] = []
    table[0][0] = position[0] + 1
    table[0][1] = position[1]

    //gauche
    table[1] = []
    table[1][0] = position[0] - 1
    table[1][1] = position[1]

    //haut
    table[2] = []
    table[2][0] = position[0]
    table[2][1] = position[1] -1

    //bas
    table[3] = []
    table[3][0] = position[0]
    table[3][1] = position[1] +1

    return table
}

function anim(slot,duration,delay = 0){
    slot.style.animationName = "anim";
    slot.style.animationDuration = duration + "s";
    slot.style.animationDirection = 'normal';
    slot.style.animationDelay = ""+delay+"s";
    slot.style.animationIterationCount = 'infinite';
    timeOut(slot,duration,delay);
}

function timeOut(elem, duration,delay){
    window.setTimeout(function (elem) {
        elem.style.animationName = 'none';
    }, (duration + delay) * 1000, elem);
}