import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu4 from '../json/menu4.json';

export class Menu4Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu4" || msg.message.extendedTextMessage.text === "!menu4") {
                await conn.sendMessage(jid, { text: menu4.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}