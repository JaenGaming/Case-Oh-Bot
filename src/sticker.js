const fs = require("fs");
const { MessageMedia } = require("whatsapp-web.js");
const path = require("path");

class Stickers {
    constructor(client) {
        this.client = client;
    }

    async sendSticker(msg, name) {
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", name + ".webp"));
        this.client.sendMessage(msg.from, media, {sendMediaAsSticker: true});
    }

    async yellowmoji(msg, prefix="") {
        const files = fs.readdirSync(path.join(__dirname, "..", "assets", "stickers")).filter(dir => dir.startsWith(prefix));
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", randomFile));
        this.client.sendMessage(msg.from, media, {sendMediaAsSticker: true});
        if(Math.random() < 0.01){
            const skullemoji = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", "yellowmoji_secret_skeletondie.webp"));
            this.client.sendMessage(msg.from, skullemoji, {sendMediaAsSticker: true});
        }}

    async bluemoji(msg, prefix="") {
        const files = fs.readdirSync(path.join(__dirname, "..", "assets", "stickers")).filter(dir => dir.startsWith(prefix));
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", randomFile));
        this.client.sendMessage(msg.from, media, {sendMediaAsSticker: true});
    }
    async catstare(msg, prefix="") {
        const files = fs.readdirSync(path.join(__dirname, "..", "assets", "stickers")).filter(dir => dir.startsWith(prefix));
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", randomFile));
        this.client.sendMessage(msg.from, media, {sendMediaAsSticker: true});
    }
    async sticker(msg) {
        const files = fs.readdirSync(path.join(__dirname, "..", "assets", "stickers")).filter(file => file.endsWith(".webp"));
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "stickers", randomFile));
        this.client.sendMessage(msg.from, media, {sendMediaAsSticker: true});
    }
}

module.exports = Stickers;