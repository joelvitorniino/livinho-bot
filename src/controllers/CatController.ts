import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

export class CatController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.conversation === '!gato' || msg.message.extendedTextMessage.text === '!gato') {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');

            await conn.sendMessage(jid, { image: { url: response.data[0].url } });
        }
    } catch(e) {
        return null;
    }
    }
}