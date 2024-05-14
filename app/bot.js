import { Telegraf } from "telegraf"

const bot = new Telegraf("7095240988:AAHyddb5dKkVoAw26I6LO6qkVjHfkgUA63I")

function send(adress){
    bot.telegram.sendMessage(1252114085, `Нове замовленя на адрес: ${adress}`)
}

export default send