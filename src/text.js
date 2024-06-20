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
}

module.exports = new Text();