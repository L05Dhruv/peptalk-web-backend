const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const itemRoutes = require("./routes/itemRoutes");

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api", itemRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
