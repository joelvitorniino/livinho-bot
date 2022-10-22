import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from "axios";
import { WikiLanguages } from "../libs/enum/WikiLanguages";
import { WikipediaLib } from "../libs/wiki-lib";
import { Utils } from "../utils/Utils";

interface IWikipedia {
    data: string;
}

export class WikipediaController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            const utils = new Utils();

            if(msg.message.conversation === `!wikipedia ${utils.commandSlice(msg.message.conversation, 10)}`) {
                const { data } = await axios.get<IWikipedia>(`https://api-wikipedia01.herokuapp.com/api/v1/search=${utils.commandSlice(msg.message.conversation, 10)}&lang=pt`);
                
                await conn.sendMessage(jid, { text: data.data });
            }

            if(msg.message.extendedTextMessage.text === `!wikipedia ${utils.commandSlice(msg.message.extendedTextMessage.text, 10)}`) {
                const { data } = await axios.get<IWikipedia>(`https://api-wikipedia01.herokuapp.com/api/v1/search=${utils.commandSlice(msg.message.conversation, 10)}&lang=pt`);
                
                await conn.sendMessage(jid, { text: data.data });
            }
        } catch(e) {
            return null;
        }
    }
}