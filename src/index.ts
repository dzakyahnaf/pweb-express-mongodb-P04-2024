import express from "express";
import cors from "cors";
import connectDB from "./db-connection";
import bookrouter from "./routes/book.route";
import authrouter from "./routes/auth.route";
import mechanismrouter from "./routes/mechanism.route";
const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: 'http://localhost:5173', // Ganti dengan domain frontend kamu
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
  })
);

app.use(cors());
app.use(express.json());
connectDB();

// check endpoint
app.get("/", (_, response) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = new Date().toLocaleDateString("en-US", options);

  response.status(200).send({
    status: "success",
    message: "Server is up and running 💫",
    date: formattedDate,
  });
});

app.use("/books", bookrouter);
app.use("/auth", authrouter);
app.use("/mechanism", mechanismrouter);

app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});
