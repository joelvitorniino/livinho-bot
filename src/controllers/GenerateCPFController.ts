import { WAMessage, WASocket } from "@adiwajshing/baileys";
import { generate } from 'gerador-validador-cpf'

export class GenerateCPFController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation.toLowerCase() === "!cpf") {
                await conn.sendMessage(jid, { text: `CPF Gerado com Sucesso: ${generate({ format: true })}` })
            }

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!cpf") {
                await conn.sendMessage(jid, { text: `CPF Gerado com Sucesso: ${generate({ format: true })}` })
            }
        } catch(e) {
            return null;
        }
    }
}