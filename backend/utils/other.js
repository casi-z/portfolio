module.exports.setTimer = (minutes, seconds) => {
    let valMin = minutes
    let valSec = seconds
    setInterval(() => {
        if(valSec === 0 && valMin === 0) global.doVKBotEnabled = true
        if(valSec === 0) valMin --
        valSec = 60
        valSec--
    }, 1000)
}

module.exports.randomStringGenerator = () => {
    let result = ''
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let max_position = words.length - 1
    for ( let i = 0; i < 5; ++i ) {
        let position = Math.floor ( Math.random() * max_position )
        result = result + words.substring(position, position + 1)
    }
    return result
}