import connectionMySQL from "../connectionMySQL.js";

export const getPosts = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query(
      "SELECT posts.id AS post_id, posts.caption, posts.image_url, users.username, users.avatar_url, posts.created_at FROM posts JOIN users ON posts.user_id = users.id"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const newPosts = async (req, res) => {
  const { user_id, caption, image_url } = req.body;
  let sql = "INSERT INTO posts (user_id, caption, image_url) VALUES (?, ?, ?)";
  let params = [user_id, caption, image_url];
  if (!user_id) {
    return res.status(400).json({
      success: false,
      error: "Log in to post content",
    });
  }
  if (!image_url) {
    return res.status(400).json({
      success: false,
      error: "Oops, looks like we are missing a picture or video?",
    });
  }

  try {
    await connectionMySQL.query(sql, params, (error) => {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: `You have made a new post`,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
