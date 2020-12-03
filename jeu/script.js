function afficher(child,cont){
    cont.appendChild(child)
}

function initMap(taille, couleur){
    let map = document.createElement("div");
    map.id = "map";
    map.style.width = taille[0] + "px";
    map.style.height = taille[1] + "px";
    map.style.backgroundColor = couleur;
    afficher(map,document.body);
    return map;
}

function initPlayer(coord,map){
    let player = document.createElement("div");
    player.style.width = "10px";
    player.style.height = "10px";
    player.style.backgroundColor = "black";
    player.coord = coord;
    player.id = "player";
    player.style.position = "absolute"
    player.afficher = function (){
        let map = document.getElementById("map");
        let testPlayer = document.getElementById("player");
        if (testPlayer !== null){
            testPlayer.remove();
            player.style.left = (player.coord[0] + "px").toString()
            player.style.top = (player.coord[1] + "px").toString()
            map.appendChild(player);
        }
    }
    player.move = function(){
        document.addEventListener("keypress", function (event){
            if(event.key === "s"){
                player.coord[1] += 5;
            }
            else if(event.key === "z"){
                player.coord[1] -= 5;
            }
            else if(event.key === "q"){
                player.coord[0] -= 5;
            }
            else if(event.key === "d"){
                player.coord[0] += 5;
            }
            player.afficher();
        })
    }
    afficher(player,map);
    return player;
}



let carte = initMap([400,400], "cyan");
let player = initPlayer([10,10],carte);

player.afficher();
player.move();
