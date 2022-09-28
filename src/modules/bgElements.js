const bgElements = () =>{
    const elements = document.querySelectorAll('.set-bg')
    elements.forEach(e =>{
       const src =  e.dataset.setbg
       e.style.backgroundImage = `url(${src})`
    })
}
export default bgElements