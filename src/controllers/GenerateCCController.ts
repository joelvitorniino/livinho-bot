import { WAMessage, WASocket } from "@adiwajshing/baileys";

const generatePaymentCard = require('generate-payment-card');

export class GenerateCCController {
    async send(conn: WASocket, msg: WAMessage, jid: string) {
        try {
            if(msg.message.conversation.toLowerCase() === "!cc amex") {
                const payment_card_details = generatePaymentCard.generate({
                    "card_brand": "american express",
                    "user_digits": {
                        "status": true,
                        "digits": 2345678991,
                        "position": "endswith"
                    }
                });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: American Express` })
            };

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!cc amex") {
                const payment_card_details = generatePaymentCard.generate({
                    "card_brand": "american express",
                    "user_digits": {
                        "status": true,
                        "digits": 2345678991,
                        "position": "endswith"
                    }
                });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: American Express` })
            }

            if(msg.message.conversation.toLowerCase() === "!cc visa") {
                const payment_card_details = generatePaymentCard.generate({
                    "user_digits": {
                       "status": true,
                       "digits": 2345678991,
                       "position": "endswith"
               },
               });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: Visa` })
            };

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!cc visa") {
                const payment_card_details = generatePaymentCard.generate({
                     "user_digits": {
                        "status": true,
                        "digits": 2345678991,
                        "position": "endswith"
                },
                });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: Visa` })
            }

            if(msg.message.conversation.toLowerCase() === "!cc mastercard") {
                const payment_card_details = generatePaymentCard.generate({
                    "card_brand": "mastercard",
                    "user_digits": {
                       "status": true,
                       "digits": 3745678991,
                       "position": "endswith"
               },
               });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: Mastercard` })
            };

            if(msg.message.extendedTextMessage.text.toLowerCase() === "!cc mastercard") {
                const payment_card_details = generatePaymentCard.generate({
                    "card_brand": "mastercard",
                    "user_digits": {
                       "status": true,
                       "digits": 3745678991,
                       "position": "endswith"
               },
               });

                await conn.sendMessage(jid, { text: `Cartão Gerado com Sucesso:\nNumero: ${payment_card_details.valid_card_number}\nCVV: ${payment_card_details.cvv}\nExpiração: ${payment_card_details.expiry_date}\nBandeira: Mastercard` })
            }
        } catch(e) {
            return null;
        }
    }
}