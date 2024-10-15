import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use(likeRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);

app.listen(port, () => console.log(`Server running on port ${port}!`));
