import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu6 from '../json/menu6.json';

export class Menu6Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu6" || msg.message.extendedTextMessage.text === "!menu6") {
                await conn.sendMessage(jid, { text: menu6.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}