import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class RandomUsernameController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === '!username') {
                const rug = require('random-username-generator');

                await conn.sendMessage(jid, { text: `Username: ${rug.generate()}`});
            };

            if(msg.message.extendedTextMessage.text === '!username') {
                const rug = require('random-username-generator');

                await conn.sendMessage(jid, { text: `Username: ${rug.generate()}`});
            }
        } catch(e) {
            return null;
        }
    }
}