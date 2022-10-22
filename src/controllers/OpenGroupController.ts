import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class OpenGroupController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        const participants = (await conn.groupMetadata(jid));
        const getAdmins = participants.participants.filter(x => x.admin).map(x => x.id);

        if(getAdmins.includes(msg.key.participant) && msg.message.conversation === '!abrir') {
            await conn.groupSettingUpdate(jid, 'not_announcement');
        };
        } catch(e) {
            return null;
        }
    }
}