import connectionMySQL from "../connectionMySQL.js";

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
