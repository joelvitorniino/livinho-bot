import { WAMessage, WASocket } from '@adiwajshing/baileys';
import axios from 'axios';

export class CandidateController {
    async send(conn: WASocket, msg: WAMessage, jid: string) { 
        try {
            if(msg.message.extendedTextMessage.text === '!candidato') {
                const response = await axios.get('https://api-candidates-funny.herokuapp.com/api/v1/candidate/random');

                await conn.sendMessage(jid, { text: response.data }, { quoted: msg });
            };

            if(msg.message.conversation === '!candidato') {
                const response = await axios.get('https://api-candidates-funny.herokuapp.com/api/v1/candidate/random');

                await conn.sendMessage(jid, { text: response.data });
            }
        } catch(e) {
            return null;
        }
    }
}