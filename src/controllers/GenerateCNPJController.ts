import { WAMessage, WASocket } from '@adiwajshing/baileys';
import { cnpj } from 'cpf-cnpj-validator';

export class GenerateCNPJController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation.toLowerCase() === "!cnpj") {
                const num = cnpj.generate(true);

                await conn.sendMessage(jid, { text: `CNPJ Gerado com Sucesso: ${num}` });
            }

            
            if(msg.message.extendedTextMessage.text.toLowerCase() === "!cnpj") {
                const num = cnpj.generate(true);

                await conn.sendMessage(jid, { text: `CNPJ Gerado com Sucesso: ${num}` });
            }
        } catch(e) {
            return null;
        }
    }
}