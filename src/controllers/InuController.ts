import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

export class InuController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.conversation === '!inu' || msg.message.extendedTextMessage.text === '!inu') {
            const response = await axios.get('https://shibe.online/api/shibes?count=1');

            await conn.sendMessage(jid, { image: { url: response.data[0] } });
        }
    } catch(e) {
        return null;
    }
    }
}