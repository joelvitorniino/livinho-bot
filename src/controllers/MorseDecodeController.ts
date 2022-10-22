import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class MorseDecodeController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation === `!morse-decode ${new Utils().commandSlice(msg.message.conversation, 13)}`) {
                const morse = require('morse-node').create("ITU");
                const morseTextDecoded = morse.decode(new Utils().commandSlice(msg.message.conversation, 13));

                await conn.sendMessage(jid, { text: `Convertido com sucesso! Código Morse Convertido: ${morseTextDecoded}` });
            };

            if(msg.message.extendedTextMessage.text === `!morse-decode ${new Utils().commandSlice(msg.message.extendedTextMessage.text, 13)}`) {
                const morse = require('morse-node').create("ITU");
                const morseTextDecoded = morse.decode(new Utils().commandSlice(msg.message.extendedTextMessage.text, 13));

                await conn.sendMessage(jid, { text: `Convertido com sucesso! Código Morse Convertido: ${morseTextDecoded}` });
            };
        } catch(e) {
            return null;
        }
    }
}