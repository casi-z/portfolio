const { getVkBot } = require('../utils/vk')
const { randomStringGenerator } = require('../utils/other')

module.exports.sendCode = async (req, res) => {
    if (global.doVKBotEnabled)
        getVkBot(randomStringGenerator())
    else
        (console.log(false))
    res.status(200)
}

