import { WAMessage, WASocket } from "@adiwajshing/baileys";

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

export class CazeController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const words = [
                "Que papinho em?",
                "Isso aí me pegou mané",
                "Eh duro!",
                "eh o q",
                "porra cara tá falando sério?",
                "IH",
                "METEU ESSA?",
                "tu tá de sacanagem doidão",
                "ELE CRAVA TÁ"
            ];

            const Super = new SuperArray();

            if(msg.message.conversation.toLowerCase() === '!caze') {
                const random = Super.randomWord(words);
                await conn.sendMessage(jid, { text: random });
            };
            
            if(msg.message.extendedTextMessage.text.toLowerCase() === '!caze') {
                const random = Super.randomWord(words);
                await conn.sendMessage(jid, { text: random }, { quoted: msg });
            };
        } catch(e) {
            return null;
        }
    }
}