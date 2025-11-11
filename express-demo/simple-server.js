const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const morgan = require("morgan");


// Impor router
const presensiRoutes = require("./routes/presensi");
const reportRoutes = require("./routes/reports");
const ruteBuku = require("./routes/books"); // Router dari modul sebelumnya


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logger untuk setiap request


// Middleware custom untuk logging waktu request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page for API");
});

// Menggunakan router
app.use("/api/books", ruteBuku); // Router dari modul sebelumnya
app.use("/api/presensi", presensiRoutes);
app.use("/api/reports", reportRoutes);

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});