import express from "express";
import connectDB from "./db-connection";
import bookrouter from "./routes/book.route";

const app = express();
const PORT = 5000;


app.use(express.json());
connectDB();   

// check endpoint
app.get("/", (_, response) => {
  response.status(200).send("Server is up and running 💫");
});

app.use("/books", bookrouter);

app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});