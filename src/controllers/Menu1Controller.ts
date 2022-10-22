import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu1 from '../json/menu1.json';

export class Menu1Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu1" || msg.message.extendedTextMessage.text === "!menu1") {
                await conn.sendMessage(jid, { text: menu1.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}