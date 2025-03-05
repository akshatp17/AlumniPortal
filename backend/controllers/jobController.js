const jobModel = require("../models/jobModel");

const jobPostController = async (req, res) => {
  const job = new jobModel(req.body);
  await job.save();
  return res.status(201).send({
    success: true,
    message: "Job Posted successfully",
    job,
  });
};
const getUserJob = async (req, res) => {
  try {
    const jobs = await jobModel
      .find({ userId: req.body.userId })
      .select("-_id title body link");
    return res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const getAllJob = async (req, res) => {
  try {
    const jobs = await jobModel.find();

    return res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { jobPostController, getAllJob, getUserJob };
