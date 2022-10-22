import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu3 from '../json/menu3.json';

export class Menu3Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu3" || msg.message.extendedTextMessage.text === "!menu3") {
                await conn.sendMessage(jid, { text: menu3.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}