const { Schema } = require('mongoose');

const trackSchema = new Schema(
  {
    trackId: {
      type: String,
      required: true,
    },
    track_title: {
      type: String,
      required: true,
    },
    track_artist: {
      type: String,
    },
    track_album: {
      type: String,
    },
    track_Img: {
      type: String,
    },
    track_Uri: {
      type: String,
    },
  }
);

module.exports = trackSchema;
