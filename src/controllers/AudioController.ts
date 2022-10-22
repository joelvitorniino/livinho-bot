import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";
import { exec } from 'shelljs';

const gtts = require("node-gtts");

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export class AudioController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();
            if(msg.message.conversation === `!tts ${utils.commandSlice(msg.message.conversation, 4)}`) {
                const languages = [
                    {
                      af: "af",
                      ar: "ar",
                      ca: "ca",
                      ch: "zh",
                      us: "en",
                      fr: "fr",
                      al: "de",
                      hu: "hu",
                      it: "it",
                      jp: "ja",
                      ko: "ko",
                      br: "pt-br",
                      ru: "ru",
                      es: "es",
                      sv: "sv",
                      tr: "tr",
                    },
                ];

                for(let attr in languages) {
                    if(languages[attr][utils.commandSlice(msg.message.conversation, 4).split(" ")[0]]) {

                        if(utils.commandSlice(msg.message.conversation, 7).length >= 201) {
                            await conn.sendMessage(jid, { text: "Epa! Isso tem mais de 200 caracteres, tente diminuir." });
                        } else {
                            gtts(languages[attr][utils.commandSlice(msg.message.conversation, 4).split(" ")[0]]).save(`${__dirname}/media/${msg.messageTimestamp}.mp3`, utils.commandSlice(msg.message.conversation, 7));
                            await sleep(2000);

                            await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/${msg.messageTimestamp}.mp3` }, mimetype: 'audio/mpeg' });

                            await sleep(1000);
                            exec(`rm ${__dirname}/media/*.mp3`)
                        }
                    }
                }
            }

            if(msg.message.extendedTextMessage.text === `!tts ${utils.commandSlice(msg.message.extendedTextMessage.text, 4)}`) {
                const languages = [
                    {
                      af: "af",
                      ar: "ar",
                      ca: "ca",
                      ch: "zh",
                      us: "en",
                      fr: "fr",
                      al: "de",
                      hu: "hu",
                      it: "it",
                      jp: "ja",
                      ko: "ko",
                      br: "pt-br",
                      ru: "ru",
                      es: "es",
                      sv: "sv",
                      tr: "tr",
                    },
                ];

                for(let attr in languages) {
                    if(languages[attr][utils.commandSlice(msg.message.extendedTextMessage.text, 4).split(" ")[0]]) {
                        if(utils.commandSlice(msg.message.extendedTextMessage.text, 7).length >= 201) {
                            await conn.sendMessage(jid, { text: "Epa! Isso tem mais de 200 caracteres, tente diminuir." });
                        } else {
                            gtts(languages[attr][utils.commandSlice(msg.message.extendedTextMessage.text, 4).split(" ")[0]]).save(`${__dirname}/media/${msg.messageTimestamp}.mp3`, utils.commandSlice(msg.message.extendedTextMessage.text, 7));
                            await sleep(2000);

                            await conn.sendMessage(jid, { audio: { url: `${__dirname}/media/${msg.messageTimestamp}.mp3` }, mimetype: 'audio/mpeg' });

                            await sleep(1000);
                            exec(`rm ${__dirname}/media/*.mp3`)
                        }
                    }
                }
            }
        } catch(e) {
            return null;
        }
    }
}