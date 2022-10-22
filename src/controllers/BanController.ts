import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class BanController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();
            const participants = (await conn.groupMetadata(jid));
            const getAdmins = participants.participants.filter(x => x.admin).map(x => x.id);

            if(getAdmins.includes(msg.key.participant) && msg.message.extendedTextMessage.text === '!ban') {
                await conn.groupParticipantsUpdate(jid, [msg.message.extendedTextMessage.contextInfo.participant], 'remove');
            };

            if(getAdmins.includes(msg.key.participant) && msg.message.extendedTextMessage.text === `!ban ${utils.commandSlice(msg.message.extendedTextMessage.text, 4)}`) {
                const getTagMember = utils.commandSlice(msg.message.extendedTextMessage.text, 4).split("@").pop().replace(/$/, "@s.whatsapp.net");

                await conn.groupParticipantsUpdate(jid, [getTagMember], 'remove');
            };
        } catch(e) {
            return null;
        }
    }
}