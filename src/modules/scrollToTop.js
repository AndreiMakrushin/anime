const scrollToTop = () =>{
 const scrollToTopButton = document.getElementById('scrollToTopButton')
 scrollToTopButton.addEventListener('click', (e)=>{
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
 })
}
export default scrollToTop