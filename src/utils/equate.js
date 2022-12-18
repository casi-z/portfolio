function equate(params) {
    
    const elem = document.querySelectorAll('[data-width="height"]')
    const elemSecond = document.querySelectorAll('[data-height="width"]')
    
    elem.forEach(e => e.style.width = `${e.offsetHeight}px`)
    elemSecond.forEach(e => e.style.height = `${e.offsetWidth}px`)
    
}
export default equate()