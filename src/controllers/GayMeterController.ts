import { WAMessage, WASocket } from "@adiwajshing/baileys";

const words = [
    "Você é como um chocolate, 50% cacau e 50% leite de pica",
    "Bom este rapaz tem 25% de chance de ser um viadão assumido.",
    "Ele tem 35% de chance de ser um viadão daqueles boiola",
    "Ele usa pronome neutre, ou seja é um viadão da porra",
    "Ele tem 10% de chance de ser, aliás puta rola em irmão slk",
    "Bom este rapaz é nazista, ou seja MORRA SEU GAY",
    "Bom ele tem 40% de chance de ser.",
    "Ele tem 60% de chance de ser.",
    "Bom esse cara segundo minhas análises analisadas, ele não é gay.",
    "SIIIIIIIIIIIIII VOCÊ CHUPA PICA RESPEITA O MELHOR DO MUNDO!"
];

export class GayMeterController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.extendedTextMessage.text === '!gaymetro') {
                const randomWord = words[Math.round(Math.random() * words.length)];

                await conn.sendMessage(jid, { text: randomWord }, { quoted: msg }); 
            }

            if(msg.message.conversation === '!gaymetro') {
                const randomWord = words[Math.round(Math.random() * words.length)];

                await conn.sendMessage(jid, { text: randomWord }); 
            }
        } catch(e) {
            return null;
        }
    }
}