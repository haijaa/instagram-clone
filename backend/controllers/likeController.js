import connectionMySQL from "../connectionMySQL.js";

// GET

export const getLikes = async (req, res) => {
  const { post_id } = req.params;
  let sql = `SELECT likes.post_id, GROUP_CONCAT(users.username ORDER BY users.username SEPARATOR ', ') AS likes_user, COUNT(likes.id) AS like_count FROM likes JOIN users ON likes.user_id = users.id WHERE likes.post_id = ? GROUP BY likes.post_id;`;

  try {
    const [rows, fields] = await connectionMySQL.query(sql, [post_id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const groupedLikes = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query("SELECT * FROM likes");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST

export const postLike = async (req, res) => {
  const { user_id, post_id } = req.body;
  let sql = "INSERT INTO likes (user_id, post_id) VALUES (?, ?)";
  let params = [user_id, post_id];
  if (!user_id) {
    return res.status(400).json({
      success: false,
      error: "Log in to like a post",
    });
  }
  try {
    await connectionMySQL.query(sql, params, (error) => {
      if (error) {
        if (error) throw error;
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
