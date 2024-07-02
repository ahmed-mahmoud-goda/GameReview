
class Details {

    async getData(gameID) {
        spin.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9dfb24a260msh52c296f241003f5p148e58jsnaeea7e4270e4',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        await this.showData(result);
        spin.classList.add("d-none");
    }

    async showData(result) {
        
        
        let allGames = document.getElementById("allgames");
        let details = document.getElementById("details");
        allGames.classList.add("d-none");
        details.classList.remove("d-none");
        details.innerHTML = `
        <div class="container my-4 d-flex justify-content-between align-items-center">
        <div>
            <h2 class="text-white">Details Game</h2>
        </div>
        <div class="icon">
            <i class="fa-solid fa-xmark h2" id="exit"></i>
        </div>
    </div>
    <div class="container my-4">
        <div class="row">
            <div class="col-md-4">
                <img src="${result["thumbnail"]}" class="w-100" alt="game">
            </div>
            <div class="col-md-8">
                <h2 class="text-white">Title: ${result["title"]}</h2>
                <h6 class="text-white mb-3">Category: <span class="info px-2 rounded-2">${result["genre"]}</span></h6>
                <h6 class="text-white mb-3">Platform: <span class="info px-2 rounded-2">${result["platform"]}</span></h6>
                <h6 class="text-white mb-3">Status: <span class="info px-2 rounded-2">${result["status"]}</span></h6>
                <p class="text-white mb-3">
                ${result["description"]}
                </p>
                <button id="showgame" type="button" class="btn btn-outline-warning text-white">Show Game</button>
            </div>

        </div>
    </div>
        `
        let showbutton = document.getElementById("showgame");
        let exit = document.getElementById("exit");
        showbutton.addEventListener("click", function () {
            window.open(result["game_url"]);
        })
        exit.addEventListener("click",function(){
            allGames.classList.remove("d-none");
        details.classList.add("d-none");
        })
        
        
    }
}
export default Details;