const express = require("express");
const app = express();

require("dotenv").config();
const dbConnect = require("./dbConnect");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes"); 
const likeRoutes = require("./routes/likeRoutes"); 
const commentRoutes = require("./routes/commentRoutes"); 


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
