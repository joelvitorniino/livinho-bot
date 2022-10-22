import { downloadContentFromMessage, WAMessage, WASocket } from "@adiwajshing/baileys";
import fs from 'fs';
import { exec } from 'shelljs';
// import magick from 'imagemagick';

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export class StickerToImageController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.extendedTextMessage.text === `!fimg`) {
                await conn.sendMessage(jid, { text: `1 - para figurinha de foto (responda citando a figurinha)` })
            } else if(msg.message.extendedTextMessage.text === '1') {
                const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
                    let buffer = Buffer.from([]);

                    for await(const chunk of stream) {
                        buffer = Buffer.concat([buffer, chunk]);
                    };

                    fs.writeFileSync(`${__dirname}/media/${msg.messageTimestamp}.webp`, buffer);

                    await sleep(2000);

                    await conn.sendMessage(jid, { image: { url: `${__dirname}/media/${msg.messageTimestamp}.webp` } }, { quoted: msg })

                    await sleep(1000);

                    exec(`rm ${__dirname}/media/*.webp`);
            }
        } catch(e) {
            return null;
        }
    }
}