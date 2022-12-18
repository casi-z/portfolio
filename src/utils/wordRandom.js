function wordRandom(arr) {
    const x = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
    return arr[x] || arr[0]
}
export default wordRandom