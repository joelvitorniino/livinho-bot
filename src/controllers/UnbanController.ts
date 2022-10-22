import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class UnbanController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        const participants = (await conn.groupMetadata(jid));
        const getAdmins = participants.participants.filter(x => x.admin).map(x => x.id);

        if(getAdmins.includes(msg.key.participant) && msg.message.extendedTextMessage.text === '!unban') {
            await conn.groupParticipantsUpdate(jid, [msg.message.extendedTextMessage.contextInfo.participant], 'add')
                .catch(x => conn.sendMessage(jid, { text: "Não foi possível adicionar esta pessoa!" }));
        };
        } catch(e) {
            return null;
        }
    }
}