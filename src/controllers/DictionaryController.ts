import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";
import { Utils } from "../utils/Utils";

export class DictionaryController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();

            if(msg.message.conversation === `!dicionario ${utils.commandSlice(msg.message.conversation, 11)}`) {
                const response = await axios.get(`https://significado.herokuapp.com/${utils.commandSlice(msg.message.conversation, 11)}`);

                await conn.sendMessage(jid, { text: `Classe Gramatical: ${response.data[0].class}\nSignificado: ${response.data[0].meanings[0]}` });
            }

            if(msg.message.extendedTextMessage.text === `!dicionario ${utils.commandSlice(msg.message.extendedTextMessage.text, 11)}`) {
                const response = await axios.get(`https://significado.herokuapp.com/${utils.commandSlice(msg.message.extendedTextMessage.text, 11)}`);

                await conn.sendMessage(jid, { text: `Classe Gramatical: ${response.data[0].class}\nSignificado: ${response.data[0].meanings[0]}` });
            }
        } catch(e) {
            return null;
        }
    }
}