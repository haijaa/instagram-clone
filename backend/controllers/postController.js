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

export const getPostsWithComments = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query(
      "SELECT posts.id AS post_id, posts.caption, posts.image_url, posts.created_at, post_user.username AS post_username, post_user.avatar_url AS user_avatar, JSON_ARRAYAGG(JSON_OBJECT('comment_id', comments.id, 'comment_content', comments.content,'comment_created_at', comments.created_at,'comment_author', users.username)) AS comments FROM posts LEFT JOIN users AS post_user ON posts.user_id = post_user.id LEFT JOIN comments ON posts.id = comments.post_id LEFT JOIN users ON comments.user_id = users.id GROUP BY posts.id"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostsWithCommentsOnId = async (req, res) => {
  const { post_id } = req.params;
  let sql = `SELECT posts.id AS post_id, posts.caption, posts.image_url, posts.created_at, post_user.username AS post_username, JSON_ARRAYAGG(JSON_OBJECT('comment_id', comments.id, 'comment_content', comments.content,'comment_created_at', comments.created_at,'comment_author', users.username)) AS comments FROM posts LEFT JOIN users AS post_user ON posts.user_id = post_user.id LEFT JOIN comments ON posts.id = comments.post_id LEFT JOIN users ON comments.user_id = users.id WHERE posts.id = ? GROUP BY posts.id;`;
  try {
    const [rows, fields] = await connectionMySQL.query(sql, [post_id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
