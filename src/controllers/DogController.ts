import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

interface IDog {
    message: string;
}

export class DogController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === '!cachorro' || msg.message.extendedTextMessage.text === '!cachorro') {
                const { data } = await axios.get<IDog>('https://dog.ceo/api/breeds/image/random');

                await conn.sendMessage(jid, { image: { url: data.message } });
            }
        } catch(e) {
            return null;
        }
    }
}