const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  jobPostController,
  getAllJob,
  getUserJob,
} = require("../controllers/jobController");

const router = express.Router();
router.post("/job-post", authMiddleware, jobPostController);
router.get("/check-jobs", authMiddleware, getAllJob);
router.get("/check-user-jobs", authMiddleware, getUserJob);

module.exports = router;
