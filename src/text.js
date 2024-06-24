const fs = require("fs");
const path = require("path");

class Text {
    constructor() {

    }

    ping(msg, client) {
        client.sendMessage(msg.from, "Pong!");
    }    

    ferrisWheel(msg, client) {
        msg.react("🎡");
        client.sendMessage(msg.from, "I am not shaped like a ferris wheel! 😡");
    }

    help(msg, client) {
        client.sendMessage(msg.from, fs.readFileSync(path.join(__dirname, "..", "assets", "help.txt")).toString());
    }

    help_de(msg, client) {
        client.sendMessage(msg.from, fs.readFileSync(path.join(__dirname, "..", "assets", "help_de.txt")).toString());
    }
    caseybasey(msg, client) {
        const lines = fs.readFileSync(path.join(__dirname, "..", "assets", "caseybasey.txt")).toString().split("\n");
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        client.sendMessage(msg.from, randomLine);
    }
}

module.exports = new Text();