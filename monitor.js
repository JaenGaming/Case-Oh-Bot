const { spawn } = require('child_process');

const scriptPath = './bot.js';

function startScript() {
    const child = spawn('node', [scriptPath]);

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        console.log('Restarting script...');
        startScript();
    });

    child.on('error', (error) => {
        console.error(`Failed to start child process: ${error}`);
    });
}

startScript();
