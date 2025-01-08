require("dotenv").config();
const { google } = require("googleapis");
const { MessageMedia } = require("whatsapp-web.js");

const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY
});

class YouTube {
    constructor() {

    }

    async getSqueweVideo() {
        const response = await youtube.channels.list({
            part: 'contentDetails',
            forHandle: "@squewe"
        })

        const uploadPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistItems = await youtube.playlistItems.list({
            part: 'snippet',
            playlistId: uploadPlaylistId,
            maxResults: 1000
        });

        const randomIndex = Math.floor(Math.random() * playlistItems.data.items.length);
        const randomVideo = playlistItems.data.items[randomIndex];

        const videoDetails = {
            title: randomVideo.snippet.title,
            publishDate: new Date(randomVideo.snippet.publishedAt).toLocaleDateString("de-DE"),
            thumbnail: await MessageMedia.fromUrl(randomVideo.snippet.thumbnails.maxres.url),
            videoUrl: "https://www.youtube.com/watch?v=" + randomVideo.snippet.resourceId.videoId
        };

        return videoDetails;
    }

    async getCaseohVideo() {
        const response = await youtube.channels.list({
            part: 'contentDetails',
            forHandle: "@caseoh_"
        })

        const uploadPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistItems = await youtube.playlistItems.list({
            part: 'snippet',
            playlistId: uploadPlaylistId,
            maxResults: 1000
        });

        const randomIndex = Math.floor(Math.random() * playlistItems.data.items.length);
        const randomVideo = playlistItems.data.items[randomIndex];

        const videoDetails = {
            title: randomVideo.snippet.title,
            publishDate: new Date(randomVideo.snippet.publishedAt).toLocaleDateString("de-DE"),
            thumbnail: await MessageMedia.fromUrl(randomVideo.snippet.thumbnails.maxres.url),
            videoUrl: "https://www.youtube.com/watch?v=" + randomVideo.snippet.resourceId.videoId
        };

        return videoDetails;
    }

    async getJaenVideo() {
        const response = await youtube.channels.list({
            part: 'contentDetails',
            forHandle: "@Jaen_Gamingamus"
        })

        const uploadPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistItems = await youtube.playlistItems.list({
            part: 'snippet',
            playlistId: uploadPlaylistId,
            maxResults: 100
        });

        const randomIndex = Math.floor(Math.random() * playlistItems.data.items.length);
        const randomVideo = playlistItems.data.items[randomIndex];

        const videoDetails = {
            title: randomVideo.snippet.title,
            publishDate: new Date(randomVideo.snippet.publishedAt).toLocaleDateString("de-DE"),
            thumbnail: await MessageMedia.fromUrl(randomVideo.snippet.thumbnails.maxres.url),
            videoUrl: "https://www.youtube.com/watch?v=" + randomVideo.snippet.resourceId.videoId
        };

        return videoDetails;
    }
    async getAnimeWaifuSongVideo() {
        const response = await youtube.channels.list({
            part: 'contentDetails',
            forHandle: "@Geoxor"
        })

        const uploadPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistItems = await youtube.playlistItems.list({
            part: 'snippet',
            playlistId: uploadPlaylistId,
            maxResults: 1000
        });

        const randomIndex = Math.floor(Math.random() * playlistItems.data.items.length);
        const randomVideo = playlistItems.data.items[randomIndex];

        const videoDetails = {
            title: randomVideo.snippet.title,
            publishDate: new Date(randomVideo.snippet.publishedAt).toLocaleDateString("de-DE"),
            thumbnail: await MessageMedia.fromUrl(randomVideo.snippet.thumbnails.maxres.url),
            videoUrl: "https://www.youtube.com/watch?v=" + randomVideo.snippet.resourceId.videoId
        };

        return videoDetails;
    }
}


module.exports = new YouTube();
