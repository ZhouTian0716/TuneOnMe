const { Schema } = require('mongoose');

const trackSchema = require('./Track.js');

const playlistSchema = new Schema(
  {
    playlist_name: {
      type: String,
      required: true,
    },
    // store user's playlists
    playlist_tracks: [trackSchema],
  },
);

module.exports = playlistSchema;
