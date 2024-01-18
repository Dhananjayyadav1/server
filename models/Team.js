import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
  team_name: {
    type: String,
    required: true,
  },
  total_members: {
    type: Number,
    required: true,
  },
  team_members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  team_image: {
    type: String,
  }
});

export default mongoose.model("Team", teamSchema);
