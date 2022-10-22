import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { Utils } from "../utils/Utils";

export class WeatherController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();

            if(msg.message.conversation.toLowerCase() === `!clima ${utils.commandSlice(msg.message.conversation.toLowerCase(), 6)}`) {
                await conn.sendMessage(jid, { image: { url: `https://wttr.in/${utils.commandSlice(msg.message.conversation.toLowerCase(), 6)}.png?lang=pt` } });
            }

            if(msg.message.extendedTextMessage.text.toLowerCase() === `!clima ${utils.commandSlice(msg.message.extendedTextMessage.text.toLowerCase(), 6)}`) {
                await conn.sendMessage(jid, { image: { url: `https://wttr.in/${utils.commandSlice(msg.message.extendedTextMessage.text.toLowerCase(), 6)}.png?lang=pt` } });
            }
        } catch(e) {
            return null;
        };
    };
};