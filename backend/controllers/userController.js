import connectionMySQL from "../connectionMySQL.js";

export const getUsers = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
