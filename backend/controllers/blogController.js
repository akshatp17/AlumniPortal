const blogModel = require("../models/blogModel");

const blogPostController = async (req, res) => {
  const blog = new blogModel(req.body);
  await blog.save();
  return res.status(201).send({
    success: true,
    message: "Blog Posted successfully",
    blog,
  });
};
const getUserBlog = async (req, res) => {
  try {
    const blogs = await blogModel
      .find({ userId: req.body.userId })
      .select("-_id title body link");
    return res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const getAllBlog = async (req, res) => {
  try {
    const blogs = await blogModel.find();

    return res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { blogPostController, getUserBlog, getAllBlog };
