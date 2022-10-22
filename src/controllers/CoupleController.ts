import { WASocket, WAMessage } from "@adiwajshing/baileys";
import axios from "axios";

export class CoupleController {
  async send(conn: WASocket, msg: WAMessage, jid: string) {
    try {
      if (
        msg.message.conversation === "!casal"
      ) {
        const metadata = (await conn.groupMetadata(jid)).participants;
        const array = metadata.map((all) => all.id);

       // const groupLib = new GroupTagLib(array);

       await conn.sendMessage(jid, { text: 'Comando desativado! Problemas técnicos.' });
      };

      if (
        msg.message.extendedTextMessage.text === "!casal"
      ) {
        const metadata = (await conn.groupMetadata(jid)).participants;
        const array = metadata.map((all) => all.id);

        // const groupLib = new GroupTagLib(array);

        await conn.sendMessage(jid, { text: 'Comando desativado! Problemas técnicos.' });
      }
    } catch (e) {
      return null;
    }
  }
}
