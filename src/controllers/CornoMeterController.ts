import { WAMessage, WASocket } from "@adiwajshing/baileys";

const arrayWords = [
    "bom o nivel de corno é MAIS DE 8000!",
    "o nivel de corno dele é de 50%",
    "nivel de corno dele é de 30%, até que é bom!",
    "o nivel de corno dele é de 25%, ih, mas usa pronome neutre, MORRA!",
    "opakdsadksaoksdadsaksadksadkadskadskdsa que cara corno mano slk",
    "Ele não é corno.",
    "mano esse cara é mt corno ele tem chance de ser 85%",
    "90% até que é bom!"
];


export class CornoMeterController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.extendedTextMessage.text === '!cornometro') {
            const randomWord = arrayWords[Math.round(Math.random() * arrayWords.length)];

            await conn.sendMessage(jid, { text: randomWord }, { quoted: msg });
        };
    } catch(e) {
        return null;
    }
    };
};