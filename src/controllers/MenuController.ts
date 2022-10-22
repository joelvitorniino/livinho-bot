import { WAMessage, WASocket } from "@adiwajshing/baileys";
import menuJSON from '../json/menu.json';

export class MenuController {
    send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.conversation === '!menu' || msg.message.extendedTextMessage.text === '!menu') {
            conn.sendMessage(jid, { text: menuJSON.messageMenu });
        };
    } catch(e) {
        return null;
    }
    };
};