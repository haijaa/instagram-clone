import connectionMySQL from "../connectionMySQL.js";

export const getComments = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query(
      "SELECT * FROM comments"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getCommentOnPost = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query(
      "SELECT comments.id, comments.content, users.username, users.avatar_url, posts.id FROM comments JOIN users ON comments.user_id = users.id JOIN posts ON comments.post_id = posts.id"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postComment = async (req, res) => {
  const { post_id, user_id, content } = req.body;
  let sql = `INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)`;
  try {
    const [rows, fields] = await connectionMySQL.query(sql, [
      post_id,
      user_id,
      content,
    ]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
