import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

export class DuckController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.conversation === '!pato') {
            const response = await axios.get('https://random-d.uk/api/v2/quack');

            await conn.sendMessage(jid, { image: { url: response.data.url } });
        };

        if(msg.message.extendedTextMessage.text === '!pato') {
            const response = await axios.get('https://random-d.uk/api/v2/quack');

            await conn.sendMessage(jid, { image: { url: response.data.url } });
        };
    } catch(e) {
        return null;
    }
    };
};