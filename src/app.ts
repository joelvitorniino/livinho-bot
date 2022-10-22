import makeWASocket, { DisconnectReason, WAMessage, WASocket, downloadContentFromMessage, MessageRetryMap, makeInMemoryStore, useMultiFileAuthState, fetchLatestBaileysVersion, useSingleFileAuthState, Contact } from "@adiwajshing/baileys";
import { Boom } from "@hapi/boom";
import { MenuController } from "./controllers/MenuController";
import { TagMembersController } from "./controllers/TagMembersController";
import { ImageStickerController } from "./controllers/ImageStickerController";
import { GifStickerController } from "./controllers/GifStickerController";
import { CoupleController } from "./controllers/CoupleController";
import { Top5Controller } from "./controllers/Top5Controller";
import { Top3Controller } from "./controllers/Top3Controller";
import { BanController } from "./controllers/BanController";
import { UnbanController } from "./controllers/UnbanController";
import { CloseGroupController } from "./controllers/CloseGroupController";
import { OpenGroupController } from "./controllers/OpenGroupController";
import { DogController } from "./controllers/DogController";
import { InuController } from "./controllers/InuController";
import { RatinhoController } from "./controllers/RatinhoController";
import { DictionaryController } from "./controllers/DictionaryController";
import { DickMeterController } from "./controllers/DickMeterController";
import { CatController } from "./controllers/CatController";
import { WikipediaController } from "./controllers/WikipediaController";
import { GayMeterController } from "./controllers/GayMeterController";
import { CornoMeterController } from "./controllers/CornoMeterController";
import { Menu1Controller } from "./controllers/Menu1Controller";
import { Menu2Controller } from "./controllers/Menu2Controller";
import { Menu3Controller } from "./controllers/Menu3Controller";
import { Menu4Controller } from "./controllers/Menu4Controller";
import { Menu5Controller } from "./controllers/Menu5Controller";
import { AudioController } from "./controllers/AudioController";
import { DuckController } from "./controllers/DuckController";
import { FoxController } from "./controllers/FoxController";
import { URSSController } from "./controllers/URSSController";
import { FaroController } from "./controllers/FaroController";
import { CazeController } from "./controllers/CazeController";
import { WeatherController } from "./controllers/WeatherController";
import { Menu6Controller } from "./controllers/Menu6Controller";
import { GenerateCPFController } from "./controllers/GenerateCPFController";
import { GenerateCNPJController } from "./controllers/GenerateCNPJController";
import { GenerateCCController } from "./controllers/GenerateCCController";
import { AntAnimalController } from "./controllers/AntAnimalController";
import { StickerToImageController } from "./controllers/StickerToImageController";
import { AddCandidateController } from "./controllers/AddCandidateController";
import { CandidateController } from "./controllers/CandidateController";
import { CroppedStickerController } from "./controllers/CroppedStickerController";
import { RouletteRussianController } from "./controllers/RouletteRussianController";
import { BingoController } from "./controllers/BingoController";
import { MorseEncodeController } from "./controllers/MorseEncodeController";
import { MorseDecodeController } from "./controllers/MorseDecodeController";
import { RandomUsernameController } from "./controllers/RandomUsernameController";
import { Menu7Controller } from "./controllers/Menu7Controller";
import Logger from "./utils/Logger";

const msgRetryCounterMap: MessageRetryMap = { };
Logger.level = 'fatal';

// the store maintains the data of the WA connection in memory
// can be written out to a file & read from it
const store = makeInMemoryStore({ logger: Logger });

const commands = async (conn: WASocket, msg: WAMessage) => {
    try {
    const jid = msg.key.remoteJid!;

    const commands = [
        new MenuController(),
        new ImageStickerController(),
        new GifStickerController(),
        new CoupleController(),
        new BanController(),
        new UnbanController(),
        new Top5Controller(),
        new Top3Controller(),
        new CloseGroupController(),
        new OpenGroupController(),
        new GayMeterController(),
        new DickMeterController(),
        new DogController(),
        new CatController(),
        new InuController(),
        new RatinhoController(),
        new DictionaryController(),
        new WikipediaController(),
        new CornoMeterController(),
        new Menu1Controller(),
        new Menu2Controller(),
        new Menu3Controller(),
        new Menu4Controller(),
        new Menu5Controller(),
        new Menu6Controller(),
        new Menu7Controller(),
        new TagMembersController(),
        new AudioController(),
        new DuckController(),
        new FoxController(),
        new URSSController(),
        new FaroController(),
        new CazeController(),
        new WeatherController(),
        new GenerateCPFController(),
        new GenerateCNPJController(),
        new GenerateCCController(),
        new AntAnimalController(),
        new StickerToImageController(),
        new AddCandidateController(),
        new CandidateController(),
        new CroppedStickerController(),
        new RouletteRussianController(),
        new BingoController(),
        new MorseEncodeController(),
        new MorseDecodeController(),
        new RandomUsernameController(),
    ];

    commands.map(async command => {
        await command.send(conn, msg, jid);
    });

    } catch(e) {
        return null;
    }
};

const startSock = async() => {
    const { state, saveCreds } = await useMultiFileAuthState(`./baileys_multi_info`);

    const { version, isLatest } = await fetchLatestBaileysVersion()
	console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)

    const sock = makeWASocket({
        version,
        logger: Logger,
        printQRInTerminal: true,
        auth: state,
        browser: ["LivinhoBot", "Chrome", "4.0.0"],
        msgRetryCounterMap,
        getMessage: async key => {
          if (store) {
            const msg = await store.loadMessage(key.remoteJid!, key.id!, undefined)
            return msg?.message || undefined
          }

          return {
            conversation: '-pls ignore-'
          }
        }
    });

    sock.ev.process(
      async (events) => {
        if(events['connection.update']) {
          const update = events['connection.update'];
          const { connection, lastDisconnect } = update;

          if(connection === 'close') {
              if((lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
                startSock();
              } else {
                console.log('Connection closed. You are logged out. Delete the BotsApp.db and session.data.json files to rescan the code.');
                process.exit(0);
              }
          } else if(connection === 'connecting') {
            console.log('[INFO] Connecting to WhatsApp...');
          } else if(connection === 'open') {
            console.log("[INFO] Connected! Welcome to Livinho Bot")
          }
        }

        if (events['creds.update']) {
          await saveCreds()
        }
        

    if(events['messages.upsert']) {
      const upsert = events['messages.upsert'];

      if(upsert.type !== 'notify') {
        return;
      }

      for await (const msg of upsert.messages) {
        try {
        await commands(sock, msg);
      } catch(e) {
        return null;
      }
    }
  }
})
}

  startSock();