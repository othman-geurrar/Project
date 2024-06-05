const mongoose = require("mongoose");
const LifeStyle_Schema = new mongoose.Schema({
  LifeStyleID: { type: String, required: true, unique: true },
  LifeStyleName: { type: String, required: true, unique: true },
  styleType: { type: String },
  Content: {
    story: { type: String },
    musicDescription: { type: String },
    description: { type: String },
    music: [
      {
        title: { type: String },
        description: { type: String },
        image: { type: String },
      },
    ], // Array of associated music
    articles: [{ type: String }], // Array of article URLs
  },
  trending: { type: Boolean, required: true },
  createdAt: { type: Date, default: new Date() },
  ImageURL: { type: String },
  ImageStory: { type: String },
  ImageMusic: { type: String },
  Image1: { type: String },
  Video: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const LifeStyle_Model = mongoose.model("LifeStyles", LifeStyle_Schema);
module.exports = LifeStyle_Model;