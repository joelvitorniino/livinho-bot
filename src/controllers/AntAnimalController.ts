import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

interface AntAnimal {
    data: [{ url: string }]
}

export class AntAnimalController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === '!formiga') {
                const response = await axios.get('https://api-animals-livinhobot.herokuapp.com/animals/ant/random');

                await conn.sendMessage(jid, { image: { url: response.data } })
                    .catch(a => conn.sendMessage(jid, { text: a }))
            }

            if(msg.message.extendedTextMessage.text === '!formiga') {
                const response = await axios.get('https://api-animals-livinhobot.herokuapp.com/animals/ant/random');

                await conn.sendMessage(jid, { image: { url: response.data } })
                .catch(a => conn.sendMessage(jid, { text: a }))
            }
        } catch(e) {
            return null;
        }
    }
}