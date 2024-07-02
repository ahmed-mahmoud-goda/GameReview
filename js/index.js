
import Games from "./games.js";
let spin = document.getElementById("spin");
spin.classList.remove("d-none");
let data = new Games();
await data.getGames("MMORPG");
spin.classList.add("d-none");
let genres = document.getElementsByClassName("nav-link")
for(let i = 0; i<genres.length;i++){
    genres[i].addEventListener("click",async function(){
        spin.classList.remove("d-none");
        for(let j = 0; j<genres.length;j++){
            genres[j].classList.remove("active");
        }
        this.classList.add("active");
        await data.getGames(genres[i].innerHTML)
        spin.classList.add("d-none");
    })
}