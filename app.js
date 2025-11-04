const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(express.static("HTMLCSS"));

// Routes API
const courses = require("./routes/courses");
app.use("/courses", courses);

app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
