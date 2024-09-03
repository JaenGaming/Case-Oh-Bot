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

    caseybasey(msg, client) {
        const lines = fs.readFileSync(path.join(__dirname, "..", "assets", "caseybasey.txt")).toString().split("\n");
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        client.sendMessage(msg.from, randomLine);
    }
    wordofdadae(msg, client) {
        const lines = fs.readFileSync(path.join(__dirname, "..", "assets", "caseybasey.txt")).toString().split("\n");
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        const reveal = ("The word of the day is: ");
        client.sendMessage(msg.from, reveal, randomLine);
    }
}

module.exports = Text;