import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class RouletteRussianController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const metadata = (await conn.groupMetadata(jid)).participants;
            let array = metadata.map(all => all.id);
            const getAdmins = metadata.filter(x => x.admin).map(x => x.id);
            array = array.filter(item => item !== "447917945420@s.whatsapp.net");
            const randomMember = array[Math.round(Math.random() * array.length)];

            if(getAdmins.includes(msg.key.participant) && msg.message.conversation.toLowerCase() === "!roletarussa") { 
                await conn.groupParticipantsUpdate(jid, [randomMember], 'remove');
            }

            if(getAdmins.includes(msg.key.participant) && msg.message.conversation.toLowerCase() === "!roletarussa") {
                await conn.groupParticipantsUpdate(jid, [randomMember], 'remove');
            }
        } catch(e) {
            return null;
        }
    }
}