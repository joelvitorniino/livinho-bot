import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class MorseEncodeController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === `!morse-encode ${new Utils().commandSlice(msg.message.conversation, 13)}`) {
                const morse = require('morse-node').create("ITU");
                const morseTextEncoded = morse.encode(new Utils().commandSlice(msg.message.conversation, 13));

                await conn.sendMessage(jid, { text: `Convertido com sucesso! Código Morse: ${morseTextEncoded}` });
            };

            if(msg.message.extendedTextMessage.text === `!morse-encode ${new Utils().commandSlice(msg.message.extendedTextMessage.text, 13)}`) {
                const morse = require('morse-node').create("ITU");
                const morseTextEncoded = morse.encode(new Utils().commandSlice(msg.message.extendedTextMessage.text, 13));

                await conn.sendMessage(jid, { text: `Convertido com sucesso! Código Morse: ${morseTextEncoded}` });
            };
        } catch(e) {
            return null;
        }
    }
}