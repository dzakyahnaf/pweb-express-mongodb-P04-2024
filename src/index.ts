import express from "express";
import connectDB from "./db-connection";
import bookrouter from "./routes/book.route";
import authrouter from "./routes/auth.route";
import mechanismrouter from "./routes/mechanism.route";

const app = express();
const PORT = 5000;

app.use(express.json());
connectDB();

// check endpoint
app.get("/", (_, response) => {
  response.status(200).send("Server is up and running 💫");
});

app.use("/books", bookrouter);
app.use("/auth", authrouter);
app.use("/mechanism", mechanismrouter);

app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});
