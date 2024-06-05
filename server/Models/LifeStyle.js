const mongoose = require("mongoose");
const LifeStyle_Schema = new mongoose.Schema({
  LifeStyleID: { type: String, required: true, unique: true },
  LifeStyleName: { type: String, required: true, unique: true },
  styleType: { type: String },
  Content: {
    story: { type: String },
    description: { type: String },
    music: [
      {
        title: { type: String },
        description: { type: String },
        duration: { type: Number }, // Duration in seconds
        image: { type: String }, // URL of image representing the music track
      },
    ], // Array of associated music
    articles: [{ type: String }], // Array of article URLs
  },
  trending: { type: Boolean, required: true },
  createdAt: { type: Date, default: new Date() },
  ImageURL: { type: String },
  VideoURL: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const LifeStyle_Model = mongoose.model("LifeStyles", LifeStyle_Schema);
module.exports = LifeStyle_Model;