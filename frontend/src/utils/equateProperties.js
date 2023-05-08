function equateProperties() {
    const elem = document.querySelectorAll('[equate="width"]')
    elem.forEach(e => e.style.height = `${e.offsetWidth}px`)
    const elemSecond = document.querySelectorAll('[equate="height"]')
    elemSecond.forEach(e => e.style.width = `${e.offsetHeight}px`)
}
export default equateProperties