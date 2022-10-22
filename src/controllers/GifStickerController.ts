import { downloadContentFromMessage, WAMessage, WASocket } from "@adiwajshing/baileys";
import fs from 'fs';
import { exec } from "shelljs";
import ffmpeg from 'fluent-ffmpeg';
import { promisify } from 'util';

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export class GifStickerController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.videoMessage && msg.message.videoMessage.caption === '!fig') {
            const stream = await downloadContentFromMessage(msg.message.videoMessage, 'video');
            let buffer = Buffer.from([]);

            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            };

            await conn.sendMessage(jid, { text: "Aguarde um pouco que estaremos enviando!" });

            const a = promisify(fs.writeFile);
            await a(`${__dirname}/media/${msg.messageTimestamp}.mp4`, buffer);

            ffmpeg(`${__dirname}/media/${msg.messageTimestamp}.mp4`) // Previously saved media (can be png or mp4)
                .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 400x400"]) 
                .videoFilters('scale=400:400:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=400:400:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=24') // fps=fps not required for images.
                .save(`${__dirname}/media/${msg.messageTimestamp}.webp`)
                .on('end', async () => {
                    await conn.sendMessage(jid, { sticker: fs.readFileSync(`${__dirname}/media/${msg.messageTimestamp}.webp`) });
                });
        };
    } catch(e) {
        return null;
    }
        try {
        if(msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage && msg.message.extendedTextMessage.text === '!fig') {
            const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage, 'video');
            let buffer = Buffer.from([]);

            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            };

            await conn.sendMessage(jid, { text: "Aguarde um pouco que estaremos enviando!" });

            const a = promisify(fs.writeFile);
            await a(`${__dirname}/media/${msg.messageTimestamp}.mp4`, buffer);

            ffmpeg(`${__dirname}/media/${msg.messageTimestamp}.mp4`) // Previously saved media (can be png or mp4)
                .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 400x400"]) 
                .videoFilters('scale=400:400:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=400:400:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=24') // fps=fps not required for images.
                .save(`${__dirname}/media/${msg.messageTimestamp}.webp`)
                .on('end', async () => {
                    await conn.sendMessage(jid, { sticker: fs.readFileSync(`${__dirname}/media/${msg.messageTimestamp}.webp`) });
                });
            };
        } catch(e) {
            return null;
        }
    };
};