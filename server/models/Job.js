const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobTitle: String,
    company: String,
    applicationDate: Date,
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
