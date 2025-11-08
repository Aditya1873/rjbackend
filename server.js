const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// ✅ Load environment variables
dotenv.config();

const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:5173",
      "https://rj-international-traders-y25x.vercel.app" // your deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);https:

app.use(express.json());

// ✅ Import Routes
const contactRoutes = require("./routes/contactRoutes");

// ✅ Mount routes under /api prefix
app.use("/api", contactRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ RJ International Backend is running successfully!");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
