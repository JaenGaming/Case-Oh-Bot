const { MessageMedia } = require("whatsapp-web.js");
const path = require('path');
const fs = require('fs');

class Audio {
    constructor(client) {
        this.client = client;
    }
    async burgerking(msg) {
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "audio", "burgerking.mp3"));
        this.client.sendMessage(msg.from, media, {sendAudioAsVoice: true});
    }
    async voicereveal(msg) {
        //choose random .mp3 file in ".." "assets" "audio" "voicereveal" folder and send it as a voice message
        const files = fs.readdirSync(path.join(__dirname, "..", "assets", "audio", "voicereveal")).filter(dir => dir.startsWith("voiceline"));
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = await MessageMedia.fromFilePath(path.join(__dirname, "..", "assets", "audio", "voicereveal", randomFile));
        this.client.sendMessage(msg.from, media, {sendAudioAsVoice: true});
    }
}

module.exports = Audio;