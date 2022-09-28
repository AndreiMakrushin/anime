const modal = () =>{
    const modal = document.querySelector('.search-model')
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.icon_search')) {
            modal.style.display = 'block'
        }else if (e.target.closest('.search-close-switch')) {
            modal.style.display = 'none'
        }
    })
}
export default modal