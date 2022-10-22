import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu5 from '../json/menu5.json';

export class Menu5Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu5" || msg.message.extendedTextMessage.text === "!menu5") {
                await conn.sendMessage(jid, { text: menu5.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}