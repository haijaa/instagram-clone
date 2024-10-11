import connectionMySQL from "../connectionMySQL.js";

// GET

export const getUsers = async (req, res) => {
  try {
    const [rows, fields] = await connectionMySQL.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE

export const createUser = async (req, res) => {
  const { username, fullname, email, password, bio } = req.body;
  let sql =
    "INSERT INTO users (username, fullname, email, password, bio) VALUES (?, ?, ?, ?)";
  let params = [username, fullname, email, password, bio];
  if (!username) {
    return res.status(400).json({
      success: false,
      error: "You need to enter a username",
    });
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      error: "You need to enter a email",
    });
  }
  if (!password) {
    return res.status(400).json({
      success: false,
      error: "You need to enter a password",
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
        message: `You have added ${username}`,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// DELETE

export const deleteUser = async (req, res) => {
  const { username } = req.body;
  let sql = "DELETE FROM users WHERE username = ?";
  if (!username) {
    return res.status(400).json({
      success: false,
      error: "Need to enter a USERNAME to delete",
    });
  }
  try {
    await connectionMySQL.query(sql, [username], (error) => {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: `Movie ${username} is now deleted`,
      });
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// PUT

export const changeUser = async (req, res) => {
  const { username, email, password, bio, avatar_url, id } = req.body;
  let sql =
    "UPDATE users SET username = ? , email = ?, password = ?, bio = ?, avatar_url = ? WHERE id = ?";
  let params = [username, email, password, bio, avatar_url, id];
  if (!id) {
    return res.status(400).json({
      success: false,
      error: "You have the user ID",
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
        message: `You have now changed ${username}`,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
