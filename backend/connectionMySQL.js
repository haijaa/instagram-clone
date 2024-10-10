import mysql from "mysql2/promise"; // Använd 'mysql2/promise' för att få en löfteskompatibel version

const connectionMySQL = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "instagram_clone",
  port: 3306,
});

export default connectionMySQL;
