import { downloadContentFromMessage, WAMessage, WASocket } from "@adiwajshing/baileys";
import fs from 'fs/promises'
import { readFileSync } from 'fs';
import Ffmpeg from "fluent-ffmpeg";
import Sticker from "wa-sticker-formatter/dist";
import { StickerTypes } from "wa-sticker-formatter/dist/internal/Metadata/StickerTypes";

export class ImageStickerController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.imageMessage && msg.message.imageMessage.caption === '!fig') {
            const stream = await downloadContentFromMessage(msg.message.imageMessage, 'image');
            let buffer = Buffer.from([]);
    
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            };
    
            const sticker = new Sticker(buffer, {
                pack: 'Niino Bot',
                author: 'Bot do Joel',
                type: StickerTypes.FULL
            });

            await conn.sendMessage(jid, await sticker.toMessage());
        };
    } catch(e) {
        return null;
    }
        try {
        if(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage && msg.message.extendedTextMessage.text === '!fig') {
            const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image');
            let buffer = Buffer.from([]);
    
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            };
    
            const sticker = new Sticker(buffer, {
                pack: 'Niino Bot',
                author: 'Bot do Joel',
                type: StickerTypes.FULL
            });

            await conn.sendMessage(jid, await sticker.toMessage());
            };

                    
        if(msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.imageMessage && msg.message.extendedTextMessage.text === '!oculto') {
            const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.imageMessage, 'image');
            let buffer = Buffer.from([]);
    
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            };
    
            const sticker = new Sticker(buffer, {
                pack: 'Niino Bot',
                author: 'Bot do Joel',
                type: StickerTypes.FULL
            });

            await conn.sendMessage(jid, await sticker.toMessage());
        }
        } catch(e) {
            return null;
        }
    };
};