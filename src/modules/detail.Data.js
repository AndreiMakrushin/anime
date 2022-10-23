const detailData = () =>{
    fetch('./db.json')
        .then(res => res.json())
        .then((j) => {
            const ganreParams = new URLSearchParams(window.location.search).get('im');
            
           let ganres = new Set();
            j.anime.forEach((i) => {
                ganres.add(i.ganre)
            })
           
            if (ganreParams) {
                renderAnimeList(j.anime, ganreParams)
            } else {
                console.log('fuck you')
            }
            
            renderGanreList(ganres)
        })
//------------------------------------------------------------------------------------
    const renderGanreList = (ganres) =>{
        const dropdownBlock = document.querySelector('.header__menu .dropdown')
        dropdownBlock.innerHTML = ''
        ganres.forEach(ganre =>{
            dropdownBlock.insertAdjacentHTML('beforeend', `
            <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }
//-----------------------------------------------------------------------------------
    const renderAnimeList = (array, im) =>{
        const animeObg = array.find(i => i.id == im)
        const renders = document.querySelector('.anime__details__content')
        const nameAnime = document.querySelector('.breadcrumb__links')
        nameAnime.innerHTML = ''
        nameAnime.insertAdjacentHTML('afterbegin', `
        <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                        <a href="./categories.html">Categories</a>
                        <span>${animeObg.title}</span>
        `)
        renders.innerHTML = ''
        
        renders.insertAdjacentHTML('afterbegin',
        `
        <div class="row">
                    <div class="col-lg-3">
                        <div class="anime__details__pic set-bg" data-setbg="${animeObg.image}">
                            <div class="view"><i class="fa fa-eye"></i>${animeObg.views}</div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="anime__details__text">
                            <div class="anime__details__title">
                                <h3>${animeObg.title}</h3>
                                <span>${animeObg['original-title']}</span>
                            </div>
   
                            <p>${animeObg.description}</p>
                            <div class="anime__details__widget">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Date aired:</span>${animeObg.date}</li>
                                            <li><span>Rating:</span>${animeObg.rating}</li>
                                            <li><span>Genre:</span>${animeObg.tags.join(', ')}</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
        `)
        renders.querySelectorAll('.set-bg').forEach(e => {
            e.style.backgroundImage = `url(${e.dataset.setbg})`
        })
        
    }
//--------------------------------------------------------------------------------------------
    
}
detailData()