import { WAMessage, WASocket } from "@adiwajshing/baileys";

export class RatinhoController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
        if(msg.message.conversation === "!ratinho" || msg.message.extendedTextMessage.text === '!ratinho') {
            const audios = [
                "http://31.220.20.119/niino-bot/ratinho.mp3",
                "http://31.220.20.119/niino-bot/uepa.mp3",
                "http://31.220.20.119/niino-bot/rapaz.mp3",
                "http://31.220.20.119/niino-bot/esse_e_meu_patrao.mp3",
                "http://31.220.20.119/niino-bot/pare.mp3",
                "http://31.220.20.119/niino-bot/cavalo.mp3",
                "http://31.220.20.119/niino-bot/tarzan.mp3",
                "http://31.220.20.119/niino-bot/head_shake.mp3",
                "http://31.220.20.119/niino-bot/isto_non_eczizte.mp3",
                "http://31.220.20.119/niino-bot/potencia.mp3",
                "http://31.220.20.119/niino-bot/irra.mp3",
            ];

            const randomAudio = audios[Math.round(Math.random() * audios.length)];

            await conn.sendMessage(jid, { audio: { url: randomAudio}, mimetype: "audio/mpeg" });
        }
    } catch(e) {
        return null;
    }
    }
}