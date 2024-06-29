const { MessageMedia } = require("whatsapp-web.js");
const path = require('path');

class Audio {
    constructor(client) {
        this.client = client;
    }
    async burgerking(msg) {
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "audio", "burgerking.mp3"));
        this.client.sendMessage(msg.from, media);
    }
}

module.exports = Audio;