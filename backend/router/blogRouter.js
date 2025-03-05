const express = require("express");
const {
  blogPostController,
  getAllBlog,
  getUserBlog,
} = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/blog-post", authMiddleware, blogPostController);
router.get("/check-blogs", authMiddleware, getAllBlog);
router.get("/check-user-blogs", authMiddleware, getUserBlog);
module.exports = router;
