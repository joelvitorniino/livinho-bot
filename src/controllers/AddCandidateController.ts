import { WAMessage, WASocket } from "@adiwajshing/baileys";
import axios from 'axios';
import { Utils } from "../utils/Utils";

export class AddCandidateController {
    async send(conn: WASocket, msg: WAMessage, jid: string) { 
        try {
            const utils = new Utils();

            if(msg.message.conversation === `!add-candidato ${utils.commandSlice(msg.message.conversation, 14)}`) {
                await axios.post(`https://api-candidates-funny.herokuapp.com/api/v1/candidate`, {
                    word: utils.commandSlice(msg.message.conversation, 14)
                });

                await conn.sendMessage(jid, { text: "Candidato adicionado com sucesso!" })
            }

            if(msg.message.extendedTextMessage.text === `!add-candidato ${utils.commandSlice(msg.message.extendedTextMessage.text, 14)}`) {
                await axios.post(`https://api-candidates-funny.herokuapp.com/api/v1/candidate`, {
                    word: utils.commandSlice(msg.message.extendedTextMessage.text, 14)
                });

                await conn.sendMessage(jid, { text: "Candidato adicionado com sucesso!" })
            }
        } catch(e) {
            return null;
        }
    }
}