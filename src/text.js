const fs = require("fs");
const path = require("path");

class Text {
    constructor(client) {
        this.client = client; 
    }

    ping(msg) {
        this.client.sendMessage(msg.from, "Pong!");
    }    

    ferrisWheel(msg) {
        msg.react("🎡");
        this.client.sendMessage(msg.from, "I am not shaped like a ferris wheel! 😡");
    }

    help(msg) {
        this.client.sendMessage(msg.from, fs.readFileSync(path.join(__dirname, "..", "assets", "help.txt")).toString());
    }

    help_de(msg) {
        this.client.sendMessage(msg.from, fs.readFileSync(path.join(__dirname, "..", "assets", "help_de.txt")).toString());
    }
}

module.exports = Text;