import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";

export class FoxController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === '!raposa') {
                const response = await axios.get('https://randomfox.ca/floof/');

                await conn.sendMessage(jid, { image: { url: response.data.image } })
            };

            if(msg.message.extendedTextMessage.text === '!raposa') {
                const response = await axios.get('https://randomfox.ca/floof/');

                await conn.sendMessage(jid, { image: { url: response.data.image } });
            };
        } catch(e) {
            return null;
        };
    };
};