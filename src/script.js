const API_KEY = `427831e0c241af4dae179660da6019b2`
const image_path = `https://image.tmdb.org/t/p/w1280`
const trailer_path = `https://www.youtube.com/watch?v=`

            //  html-ში კლასების მიხედვით ცვლადები
const input = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const main_grid_title = document.querySelector('.favorites h1')
const main_gird = document.querySelector('.favorites .movies-grid')

        // ფილმზე ქლიქის დროს ფილმის სრულ აღწერილობაზე გადასვლა
function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => show_popup(card))
    });
}


            //   ასინქრონულობა +  ჯეისონ ფაილი
get_movie_by_search('game')
async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    return respData.results
    
}

        // სერჩში მოძებნის შედეგად  პოსტერის და აღწერილობის გამოტანა
btn.addEventListener('click', add_searched_movies_to_dom)

 async function add_searched_movies_to_dom () {
    const data = await get_movie_by_search(input.value)
    console.log(data);
        
main_grid_title.innerText = `Search Results...`
main_gird.innerHTML = data.map(e => {
    return `
            <div class="movies-grid">
                 <div class="card" data-id="${e.id}">
                    <div class="img">
                        <img src="${image_path + e.poster_path}">
                    </div>
                    <div class="info">
                        <h2>${e.title}</h2>
                        <div class="single-info">
                            <span>Rate: </span>
                            <span>${e.vote_average}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date: </span>
                            <span>${e.release_date}</span>
                        </div>
                    </div> 
                </div> 
            </div>
    `    
}) .join('')
    
    // ფილმის პოსტერზე დაჭერისას ფილმის ინფორმაციაზე გადასვლა
    
const cards = document.querySelectorAll('.card')
add_click_effect_to_card(cards)
}

function show_popup (card) {
    
}
   