import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class URSSController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation.toLowerCase() === "!urss") {
                await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/urss.mp3` }, mimetype: 'audio/mpeg' });
            };

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!urss") {
                await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/urss.mp3` }, mimetype: 'audio/mpeg' });
            }
        } catch(e) {
            return null;
        }
    }
}