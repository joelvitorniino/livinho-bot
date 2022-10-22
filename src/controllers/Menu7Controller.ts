import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menu7 from '../json/menu7.json';

export class Menu7Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === "!menu7" || msg.message.extendedTextMessage.text === "!menu7") {
                await conn.sendMessage(jid, { text: menu7.messageMenu })
            }
        } catch(e) {
            return null;
        }
    }
}