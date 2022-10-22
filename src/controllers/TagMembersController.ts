import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class TagMembersController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
    try {
    const participants = (await conn.groupMetadata(jid));
    const getAdmins = participants.participants.filter(x => x.admin).map(x => x.id);
        
    if(getAdmins.includes(msg.key.participant) && msg.message.conversation === '!mt') {
        const metadata = (await conn.groupMetadata(msg.key.remoteJid));
        const array = metadata.participants.map(all => all.id);

        let allMembers = '';
        array.forEach((participant, i) => allMembers += `@${array[i].replace('@s.whatsapp.net', '')}\n`);

        await conn.sendMessage(msg.key.remoteJid!, { text: allMembers, mentions: array });
        };

        if(getAdmins.includes(msg.key.participant) && msg.message.extendedTextMessage.text === '!mt') {
            const metadata = (await conn.groupMetadata(msg.key.remoteJid));
            const array = metadata.participants.map(all => all.id);
    
            let allMembers = '';
            array.forEach((participant, i) => allMembers += `@${array[i].replace('@s.whatsapp.net', '')}\n`);
    
            await conn.sendMessage(msg.key.remoteJid!, { text: allMembers, mentions: array });
            };
    } catch(e) {
        return null;
    }
    };
};