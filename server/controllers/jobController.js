const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, userId: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const updated = await Job.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ msg: "Job deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
