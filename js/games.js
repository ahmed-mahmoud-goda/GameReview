import Details from "./details.js";

let data = new Details()

class Games {
    async getGames(category) {
      
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9dfb24a260msh52c296f241003f5p148e58jsnaeea7e4270e4',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
	    const result = await response.json();
        this.showGames(result);
    }
    showGames(result){
        
        let show = document.getElementById("games");
        let games ="";
        for(let i in result){
            games +=`
            <div class="col-xl-3 col-lg-4 mb-4 col-md-6 col-12">
        <div id="${result[i]["id"]}" class="card h-100 bg-transparent" role="button" >
          <div class="card-body">
             <figure class="position-relative">
                <img class="card-img-top object-fit-cover w-100" src="${result[i]["thumbnail"]}">
             </figure>
             <figcaption>
                <div class="hstack justify-content-between">
                   <h3 class="h6 small text-white">${result[i]["title"]}</h3>
                   <span class="badge free  p-2">Free</span>
                </div>
                <p class="card-text text-white small text-center opacity-50">
                   ${result[i]["short_description"].substring(0,90)}
                </p>
 
             </figcaption>
          </div>
          <footer class="card-footer small hstack justify-content-between">
             <span class="badge badge-color text-white">${result[i]["genre"]}</span>
             <span class="badge badge-color text-white">${result[i]["platform"]}</span>
          </footer>
       </div>
      </div>
            `
        }
        show.innerHTML = games;
        
        const cards = document.querySelectorAll('.card');
        for(let i = 0; i<cards.length;i++){
          cards[i].addEventListener('click', function(){
            data.getData(this.id);
        }
      )
      }

    }
}
export default Games;