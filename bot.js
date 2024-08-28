// itsame Jaen

require("dotenv").config();

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');
const fs = require('fs');

if (!process.env.CHROME_PATH || !process.env.YOUTUBE_API_KEY) {
    throw new Error("CaseOh Bot requires a valid .env file with atleast CHROME_PATH and YOUTUBE_API_KEY specified.\nCheck the README for more details.")
    }

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: process.env.CHROME_PATH,
        headless: true,
        args: process.env.DISABLE_SANDBOX == "true" ? ["--no-sandbox"] : undefined
    }
});

// cmds
const text = new (require("./src/text"))(client);
const stickers = new (require("./src/sticker"))(client);
const youtube = require("./src/youtube");
const audio = new (require("./src/audio"))(client);

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage("120363237311723757@g.us", "Me liv :) (TEST VERSION)");
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

let hasStickersEnabled = {}

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
        client.sendMessage(msg.from, "Caught in 4K Lil bro");
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
    if (msg.body === "!caseybasey") {
        text.caseybasey(msg, client);
        console.log("!caseybasey")
    }
    if (msg.body === "!sticker") {
        stickers.sticker(msg);
        console.log("!sticker")
    }
    if (msg.body === "!bk") {
        audio.burgerking(msg);
        console.log("!bk")
    }
    if (msg.body === "!geoxor") {
        const video = await youtube.getAnimeWaifuSongVideo();
    
        await client.sendMessage(msg.from, video.thumbnail, {caption: `*${video.title}*\n_${video.publishDate}_\n\n${video.videoUrl}`});
        console.log("!geoxor")
    }
    if (msg.body === "!voicereveal") {
        audio.voicereveal(msg);
        console.log("!voicereveal")
    }
    if (msg.body === "!time") {
        const time = new Date().toLocaleTimeString();
        client.sendMessage(msg.from, time);
        console.log("!time")
    }
    if (msg.type === "sticker" && hasStickersEnabled[msg.from]) {
        stickers.sticker(msg);
        console.log("me react to sticker wudahel 💀")
    }
    if (msg.body === "!stickers") {
        if (typeof hasStickersEnabled[msg.from] !== "boolean") {
            hasStickersEnabled[msg.from] = false;
        }
        hasStickersEnabled[msg.from] = !hasStickersEnabled[msg.from];

        if (hasStickersEnabled[msg.from]) {
            client.sendMessage(msg.from, "Enabled stickers");
            console.log("Enabled stickers")
        } else {
            client.sendMessage(msg.from, "Disabled stickers");
            console.log("Disabled stickers")
        }
    }
    if (msg.body.startsWith("!8ball")) {
        const msgBody = msg.body.slice(7);
        const replyText = `You asked: ${msgBody}\n`;
        const achtball = fs.readFileSync(path.join(__dirname, "assets", "achtball.txt")).toString().split("\n");
        const randomLine = achtball[Math.floor(Math.random() * achtball.length)];
        const boobis = `My answer: `;
        const göhö = replyText + boobis + randomLine;
        msg.reply(göhö);
        console.log("!8ball")
    }
    if (msg.body.startsWith("!coinflip")) {
        const msgBody = msg.body.slice(9);
        const replyText = `You asked: ${msgBody}\n`;
        const coinflip = fs.readFileSync(path.join(__dirname, "assets", "coinflip.txt")).toString().split("\n");
        const randomLine = coinflip[Math.floor(Math.random() * coinflip.length)];
        const boobis = `My answer: `;
        const göhö = replyText + boobis + randomLine;
        msg.reply(göhö);
        console.log("!coinflip")
    }
})

client.initialize();
