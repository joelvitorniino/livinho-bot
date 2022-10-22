import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class CloseGroupController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        const participants = (await conn.groupMetadata(jid));
        const getAdmins = participants.participants.filter(x => x.admin).map(x => x.id);

        if(getAdmins.includes(msg.key.participant) && msg.message.conversation === '!fechar') {
            await conn.groupSettingUpdate(jid, 'announcement');
        };

        if(getAdmins.includes(msg.key.participant) && msg.message.extendedTextMessage.text === '!fechar') {
            await conn.groupSettingUpdate(jid, 'announcement');
        };

        if(!getAdmins.includes(msg.key.participant) && msg.message.conversation === '!fechar') {
            await conn.sendMessage(jid, { text: "Você não é admin para fechar o grupo!" })
        }
    } catch(e) {
        return null;
    }
    }
}