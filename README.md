<div id="header" align="center">
  <h1>Case-Oh-Bot</h1>
</div>

<div id="header" align="center">
  <img src="https://yt3.googleusercontent.com/yMgikI6obExifai9mch7ut8T68u97svQa8AWNimkxDLLy35mTRIgwOTWqS7oL41DikmqYbte=s160-c-k-c0x00ffffff-no-rj" width="100"/>
</div>
<div id="badges" align="center">
  <a href="https://twitch.tv/jaen_gaming">
    <img src="https://img.shields.io/badge/Twitch-purple?style=for-the-badge&logo=twitch&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://www.youtube.com/@Jaen_Gaming69420?sub-confirmation=1">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a>
  <a href="https://x.com/jans_1910">
    <img src="https://img.shields.io/badge/Twitter-black?style=for-the-badge&logo=x&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>

## What is Case-Oh-Bot?

CaseOh-Bot is a WhatsApp bot that can help you with various things. He can send you random videos from CaseOH's YouTube channel, send you catstares, a random yellowmoji sticker, a random bluemoji sticker, and more. He can even help you with some funny things.

## What can CaseOh-Bot do?

- Send you random videos from CaseOn's YouTube channel
- Send you catstare sticker
- Send a random yellowmoji sticker
- Send a random bluemoji sticker
- Send a funny sticker or video
- Send a Video from the youtuber Geoxor (dubstep)
- Send you videos from Squewe

You can interact with CaseOh-Bot by sending him messages. For example, you can send "!caseoh" to get a random video from CaseOh's YouTube channel.

## Installation

<details>
<summary>🐧 Linux</summary>
<br>
Before you start: you need a Chromium based browser (Google Chrome recommended) installed.

If you are on a no-gui or light system, make sure these dependency packages are installed:
```
gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget git
```
You can use whatever package manager your distro comes with.
You will also need Node.js LTS. You can use `nvm` for that, which has a install script:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
### 2. Getting source code
Now you need the source code. You can either download this repo as a ZIP file or use git clone (recommended):
```bash
git clone https://github.com/Janblocks1910/Case-Oh-Bot.git
```
### 3. Installing dependencies
Inside the project folder run:
```bash
npm i
```
### 4. Preparing keys and environment settings
Using Google Cloud Console, create a YouTube API key. How that works won't be mentioned here.
> **NOTE**
>
> Because every distro and package manager is different, run `whereis google-chrome` to find your Chrome installation path. On Debian/Ubuntu it should be `/usr/bin/google-chrome-stable`
Then create a `.env` file with following:
```
YOUTUBE_API_KEY="youryoutubeapikeyhere"
CHROME_PATH="/usr/bin/google-chrome-stable"
```
### 4. Run
Now CaseOh Bot is ready to start! Simply run:
```bash
node .
```
Scan the QR code in your terminal with a WhatsApp profile that should act as CaseOh Bot.
If you get sandbox related errors, this is sadly something Linux users have to deal with. If this is running on your host machine, your'e on your own to fix it.
If you cannot fix it and are comfortable running without the sandbox, you can add `DISABLE_SANDBOX="true"` to your `.env`, this works well for making it work in a Docker container for example.
</details>

<details>
<summary>🍎 macOS</summary>
<br>
Before you start: you need <a href="https://brew.sh">homebrew</a> and a Chromium based browser (Google Chrome recommended) installed.

Now you can easily install Node.js and Git using Terminal:
```bash
brew install node git
```
### 2. Getting source code
Now you need the source code. You can either download this repo as a ZIP file or use git clone (recommended):
```bash
git clone https://github.com/Janblocks1910/Case-Oh-Bot.git
```
### 3. Installing dependencies
Inside the project folder run:
```bash
npm i
```
### 4. Preparing keys and environment settings
Using Google Cloud Console, create a YouTube API key. How that works won't be mentioned here.
Then create a `.env` file with following:
```
YOUTUBE_API_KEY="youryoutubeapikeyhere"
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```
### 4. Run
Now CaseOh Bot is ready to start! Simply run:
```bash
node .
```
Scan the QR code in your terminal with a WhatsApp profile that should act as CaseOh Bot.
</details>

<details>
<summary>🪟 Windows</summary>
<br>
Before you start: you need Node.js (LTS recommended but latest also works), and Git.

On Windows 10/11, you can use `winget` to install Node.js LTS:

```bash
winget install OpenJS.NodeJS.LTS
```
Same thing with Git:
```bash
winget install Git.Git
```
Or if you are on older Windows versions or don't want to use `winget`, get Node.js from <a href="https://nodejs.org/en">here</a>.
### 2. Getting source code
Now you need the source code. You can either download this repo as a ZIP file or use git clone (recommended):
```bash
git clone https://github.com/Janblocks1910/Case-Oh-Bot.git
```
### 3. Installing dependencies
Inside the project folder run:
```bash
npm i
```
### 4. Preparing keys and environment settings
Using Google Cloud Console, create a YouTube API key. How that works won't be mentioned here.

> **NOTE**
>
> If you got rid of Microsoft Edge or it wasn't installed for you, you need to get a Chromium based browser (perferrably Google Chrome), and use it's path instead of the Microsoft Edge path in `.env`!
Then create a `.env` file with following:
```
YOUTUBE_API_KEY="youryoutubeapikeyhere"
CHROME_PATH="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
```
### 4. Run
Now CaseOh Bot is ready to start! Simply run:
```bash
node .
```
Scan the QR code in your terminal with a WhatsApp profile that should act as CaseOh Bot.
</details>
