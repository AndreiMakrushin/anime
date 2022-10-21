const mainData = () => {

    fetch('./db.json')
        .then(res => res.json())
        .then((j) => {
            
           // allAnime((j.anime).splice(0, 9));
           let ganres = new Set();
            j.anime.forEach((i) => {
                ganres.add(i.ganre)
            })
            
            topAnime(j.anime.sort((a, b) => b.views - a.views).splice(0, 5));
            renderAnimeList(j.anime.sort((a, b) => b.views - a.views), ganres)
        })
    const renderAnimeList = (array, ganres) =>{
        const gan = document.querySelector('.product .col-lg-8')

        gan.innerHTML = ''

        ganres.forEach((ganre) =>{
            const productBlock = document.createElement('div')
            const listBlock = document.createElement('div')
            const list = array.filter(i => i.ganre === ganre)
            
            listBlock.classList.add('row')

            productBlock.insertAdjacentHTML('afterbegin', `
            <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-8">
                                <div class="section-title">
                                    <h4>${ganre}</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="btn__all">
                                    <a href="/categories.html" class="primary-btn">View All <span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
            `)

            list.forEach(im => {
                const text = document.createElement('ul')
                im.tags.forEach(tag=>{
                    text.insertAdjacentHTML('afterbegin', `<li>${tag}</li> `)
                })
                listBlock.insertAdjacentHTML('afterbegin', `
                <div class="col-lg-4 col-md-6 col-sm-6 hov" >
                <div class="product__item">
                 <div class="product__item__pic set-bg" data-setbg="${im.image}">
                        <div class="ep">${im.rating} / 10</div>
                         <div class="view"><i class="fa fa-eye"></i>${im.views}</div>
                    </div>
                    <div class="product__item__text">
                                ${text.outerHTML}
                <h5><a href="/anime-details.html">${im.title}</a></h5>
                    </div>
                </div>
                </div>
                `)
            })
            listBlock.querySelectorAll('.set-bg').forEach(e => { 
                e.style.backgroundImage = `url(${e.dataset.setbg})`
            })
            productBlock.append(listBlock)
            gan.append(productBlock)
        })
        
    }

    const topAnime = (array) => {
        

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

    /*const allAnime = (array) => {
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
        
    }*/
   

}
export default mainData;

