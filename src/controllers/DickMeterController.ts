import { WAMessage, WASocket } from "@adiwajshing/baileys";

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

export class DickMeterController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.extendedTextMessage.text === '!picametro') {
            const arrayWords = [
                "Bom a pica deste ser humano é: 40CM, vulgo arrombador de xotas",
                "CARALHO A PICA DO MLK MEDE 30CM, vulgo kid bengala",
                "ih pequeninho, vulgo fimose, mede 4cm",
                "mano esse cara tem um micro pênis mede 2cm, slk",
                "coitado dele, é um trap, n tem pau :(",
                "17 cm aí sim, na média parceiro, só vai pro abate",
                "O CARA TEM 50CM FI, VULGO ESTOURADOR DE PETRÓLEO",
                "10cm, bom dá pra comer uma cega de boa!"
            ];

            const Super = new SuperArray();
            const wordRandom = Super.randomWord(arrayWords);

            await conn.sendMessage(jid, { text: wordRandom }, { quoted: msg });

        }
        } catch(e) {
            return null;
        }
    }
}