const easyvk = require('easyvk')
const { setTimer } = require('./other')

module.exports.getVkBot = (code) => {
    easyvk({
        token: 'vk1.a.S_B-wW6XixdF6XwXONJ3M0ObwFXMb7B1_9SbBNojZCHurGK7n2tERZWkAlUfjwmp-0ePFVqvWPIT29rr4P8aoLegN06UY0fv0WzRoeAmjMd1ppHQgZ9mYZeHt1RGO8TvX7esDBXI1ME6cmkMoN3fNC61F9MzpVwrQjOlaie0DTCjXkzbeLQiyu5iBZ8Q3_57uzkvddZnV3ctizlzKjo47g'
    }).then(async vk => {

        let peerId = 318059266 // ID получателя

        /** Отправляем сообщение */
        let response = await vk.call('messages.send', {
            peer_id: peerId,
            message: code,
            /** Получаем случайное число с привязкой к дате*/
            random_id: easyvk.randomId()
        })

        console.log(response) // Выводим ID отправленного сообщения
        global.doVKBotEnabled = false
        setTimer(0, 30)
    })
}