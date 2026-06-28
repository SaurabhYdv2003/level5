import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello duniya maine deploy kar diya hai project ko dekhlooo" })
});
app.get("/health", (req, res) => {
  return res.status(200).json({ message: "goodddd hai bhaiya !!!" });
});

app.listen(port, () => {
  console.log(`server started ${port}`);
});
