import { WAMessage, WASocket } from "@adiwajshing/baileys";

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

export class FaroController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const list = [
                "/faro1.m4a",
                "/faro2.m4a",
                "/faro3.m4a",
                "/faro4.m4a",
                "/faro5.m4a",
                "/faro6.m4a",
                "/faro7.m4a",
                "/faro8.m4a",
                "/faro9.m4a",
                "/faro10.m4a",
                "/faro11.m4a",
                "/faro12.m4a",
                "/faro13.m4a",
                "/faro14.m4a",
                "/faro15.m4a",
                "/faro16.m4a",
                "/faro17.m4a",
                "/faro18.m4a",
                "/faro19.m4a",
                "/faro20.m4a",
                "/faro21.m4a"
            ];

            const Super = new SuperArray();

            if(msg.message.conversation.toLowerCase() === "!faro") {
                const faroRandom = Super.randomWord(list);
                await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/faro${faroRandom}` }, mimetype: 'audio/mpeg' })
            }

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!faro") {
                const faroRandom = Super.randomWord(list);
                await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/faro${faroRandom}` }, mimetype: 'audio/mpeg' })
            }
        } catch(e) {
            return null;
        }
    }
}