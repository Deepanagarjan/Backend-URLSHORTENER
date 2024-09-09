import express from 'express';  // Use import
import cors from 'cors';  // Use import for cors
import userRoutes from './Routes/userRoutes.js';  // Add .js extension
import urlRoutes from './Routes/urlRoutes.js';  // Add .js extension
// import redirectRoutes from './Routes/redirectRoutes.js';  // Add .js extension

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>URL-Shortener</h1>");
});

app.use("/users", userRoutes);
app.use("/user/url", urlRoutes);
app.use("/short", redirectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;  // Use export default for ES modules
