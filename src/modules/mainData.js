const mainData = () => {

    fetch('./db.json')
        .then(res => res.json())
        .then((j) => {
            const ganres = new Set();
            topAnime(j.anime.sort((a, b) => b.views - a.views).splice(0, 5));
            allAnime((j.anime).splice(0, 9));
            j.anime.forEach((i) => {
                ganres.add(i.ganre)
            })
        })


    const topAnime = (array, ganres) => {

        let wrapper = document.querySelector('.filter__gallery')
        wrapper.innerHTML = '';
        array.forEach((i) => {
            wrapper.insertAdjacentHTML('afterbegin', `
            <div class="product__sidebar__view__item set-bg mix"
                                    data-setbg="${i.image}">
                                    <div class="ep">${i.rating} / 10</div>
                                    <div class="view"><i class="fa fa-eye"></i>${i.views}</div>
                                    <h5><a href="/anime-details.html">${i.title}</a></h5>
                                </div>`)
        })
        wrapper.querySelectorAll('.set-bg').forEach(e => {
            e.style.backgroundImage = `url(${e.dataset.setbg})`
        })
        
    }

    const allAnime = (array) => {
        let anime = document.querySelector('.anime-cards');
        anime.innerHTML = '';
        array.forEach((im) => {
            anime.insertAdjacentHTML('afterbegin', `
        <div class="col-lg-4 col-md-6 col-sm-6 hov" >
            <div class="product__item">
             <div class="product__item__pic set-bg" data-setbg="${im.image}">
                    <div class="ep">${im.rating} / 10</div>
                     <div class="view"><i class="fa fa-eye"></i>${im.views}</div>
                </div>
                <div class="product__item__text">
                            <ul>
                            <li>Active</li>
                            <li>Movie</li>
                        </ul>
            <h5><a href="/anime-details.html">${im.title}</a></h5>
                </div>
            </div>
            </div>
        `)
        })
        anime.querySelectorAll('.set-bg').forEach(e => { 
            e.style.backgroundImage = `url(${e.dataset.setbg})`
        })
        
    }
   

}
export default mainData;

