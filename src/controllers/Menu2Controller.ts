import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu2 from '../json/menu2.json';

export class Menu2Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu2" || msg.message.extendedTextMessage.text === "!menu2") {
                await conn.sendMessage(jid, { text: menu2.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}