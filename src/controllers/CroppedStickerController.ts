import { downloadContentFromMessage, WAMessage, WASocket } from "@adiwajshing/baileys";
import Sticker, { StickerTypes } from "wa-sticker-formatter/dist";
// import Sticker from "wa-sticker-formatter/dist";
// import { StickerTypes } from "wa-sticker-formatter/dist"

export class CroppedStickerController {
    async send(conn: WASocket, msg: WAMessage, jid: string) { 
        try {
            if(msg.message.imageMessage && msg.message.imageMessage.caption === '!fig-crop') {
                const stream = await downloadContentFromMessage(msg.message.imageMessage, 'image');
                let buffer = Buffer.from([]);
        
                for await(const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk]);
                };
        
                const sticker = new Sticker(buffer, {
                    pack: 'Mamakos Bot',
                    author: 'Joel Vitor',
                    type: StickerTypes.CROPPED
                });
        
                await conn.sendMessage(jid, await sticker.toMessage());
            };

            if(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage && msg.message.extendedTextMessage.text === '!fig-crop') {
                const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image');
                let buffer = Buffer.from([]);
        
                for await(const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk]);
                };
        
                const sticker = new Sticker(buffer, {
                    pack: 'Mamakos Bot',
                    author: 'Joel Vitor',
                    type: StickerTypes.CROPPED
                });
        
                await conn.sendMessage(jid, await sticker.toMessage());
            };
        } catch(e) {
            return null;
        }
    }
}