function randomElement(array) {
    const x = Math.floor(Math.random() * (array.length - 0 + 1)) + 0;
    return array[x] || array[0]
}
export default randomElement