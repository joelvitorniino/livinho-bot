import { WASocket, WAMessage } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class Top5Controller {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();

            if(msg.message.conversation === `!top5 ${utils.commandSlice(msg.message.conversation, 5)}`) {
                const metadata = (await conn.groupMetadata(jid)).participants;
                const array = metadata.map(all => all.id);
    
                // const groupLib = new GroupTagLib(array);

                await conn.sendMessage(jid, { text: 'Comando desativado! Problemas técnicos.' });
            }

            if(msg.message.extendedTextMessage.text === `!top5 ${utils.commandSlice(msg.message.extendedTextMessage.text, 5)}`) {
                const metadata = (await conn.groupMetadata(jid)).participants;
                const array = metadata.map(all => all.id);
                
                // const groupLib = new GroupTagLib(array);

                await conn.sendMessage(jid, { text: 'Comando desativado! Problemas técnicos.' });

                console.log("a")
            }

            if(msg.message.conversation === "!top5" || msg.message.extendedTextMessage.text === '!top5') {
                await conn.sendMessage(jid, { text: "Você precisa acrescentar um tema para realizar este comando!" })
            }
        } catch(e) {
            return null;
        }
    }
}