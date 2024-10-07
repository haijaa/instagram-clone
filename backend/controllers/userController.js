import connectionMySQL from '../connectionMySQL.js';

export const getUsers = async (req, res) => {
  const sql = 'SELECT * FROM users';
  try {
    const [results] = await connectionMySQL.query(sql);
    res.json(results);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};