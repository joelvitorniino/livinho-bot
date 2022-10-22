import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class BingoController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === `!bingo ${new Utils().commandSlice(msg.message.conversation, 6)}`) {
                const metadata = (await conn.groupMetadata(msg.key.remoteJid));
                const array = metadata.participants.map(all => all.id);

                const arrayMember = array[Math.round(Math.random() * array.length)];
                let member = `@${arrayMember.replace('@s.whatsapp.net', '')}`;

                const randomNumber = Math.floor(Math.random() * (parseInt(new Utils().commandSlice(msg.message.conversation, 6)) - 0 + 1)) + 0;

                await conn.sendMessage(jid, { text: `Bingo:\n\n${member} o número sorteado foi ${randomNumber}`, mentions: [arrayMember] });
            }

            if(msg.message.extendedTextMessage.text === `!bingo ${new Utils().commandSlice(msg.message.extendedTextMessage.text, 6)}`) {
                const metadata = (await conn.groupMetadata(msg.key.remoteJid));
                const array = metadata.participants.map(all => all.id);
                
                const arrayMember = array[Math.round(Math.random() * array.length)];
                let member = `@${arrayMember.replace('@s.whatsapp.net', '')}`;

                const randomNumber = Math.floor(Math.random() * (parseInt(new Utils().commandSlice(msg.message.extendedTextMessage.text, 6)) - 0 + 1)) + 0;

                await conn.sendMessage(jid, { text: `Bingo:\n\n${member} o número sorteado foi ${randomNumber}`, mentions: [arrayMember] });
            }
        } catch(e) {
            return null;
        }
    }
}