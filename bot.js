//itsame Jaen

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');
const { Configuration, OpenAIApi } = require('openai');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`
    }
});

// cmds
const text = require("./src/text");
const stickers = new (require("./src/sticker"))(client);
const youtube = require("./src/youtube");

client.on('ready', () => {
    console.log('Client is ready!');0
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on("message", async msg => {
    console.log(msg.from, msg.type, "sent", msg.body)
    if (msg.body === "!ping") {
        text.ping(msg, client);
        console.log("!ping")
    }
    if (msg.body === "!ferriswheel") {
        text.ferrisWheel(msg, client);
        console.log("!ferriswheel")
    }
    if (msg.body === "!msgmediatest") {
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "assets", "videos", "momus_lore.mp4"));
        client.sendMessage(msg.from, media, {caption: "momus lore"});
        console.log("!msgmediatest")
    }
    if (msg.body === "!linus") {
        stickers.sendSticker(msg, "linus");
        console.log("!linus")
    }
    if (msg.body === "!yellowmoji") {
        stickers.yellowmoji(msg, "yellowmoji");
        console.log("!yellowmoji")
    }
    if (msg.body === "!bluemoji") {
        stickers.bluemoji(msg, "bluemoji");
        console.log("!bluemoji")
    }
    if (msg.body === "!catstare") {
        stickers.catstare(msg, "catstare");
        console.log("!catstare")
    }
    if (msg.body === "!squewe") {
        const video = await youtube.getSqueweVideo();
    
        await client.sendMessage(msg.from, video.thumbnail, {caption: `*${video.title}*\n_${video.publishDate}_\n\n${video.videoUrl}`});
        console.log("!squewe")
    }
    if (msg.body === "!caseoh") {
        const video = await youtube.getCaseohVideo();
    
        await client.sendMessage(msg.from, video.thumbnail, {caption: `*${video.title}*\n_${video.publishDate}_\n\n${video.videoUrl}`});
        console.log("!caseoh")
    }
    if (msg.body === "!help") {
        text.help(msg, client);
        console.log("!help")
    }
    if (msg.body === "!help de") {
        text.help_de(msg, client);
        console.log("!help de")
    }
    if (msg.body === "!jaen") {
        const video = await youtube.getJaenVideo();
    
        await client.sendMessage(msg.from, video.thumbnail, {caption: `*${video.title}*\n_${video.publishDate}_\n\n${video.videoUrl}`});
        console.log("!jaen")
    }

})

client.initialize();