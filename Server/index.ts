import express, { Request, Response } from "express"; // Import express and necessary types


import mongoose from "mongoose"; // Import mongoose for database interaction
import { router } from "./View/view"; // Import your router

const app = express(); // Create an instance of express for the app
import cors from "cors"

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors())

// Route to test if the server is working
app.get("/", (req: Request, res: Response) => {
  try {
    res.json({
      message: "hi"
    });
  } catch (error) {
    res.json({
      message: "error"
    });
  }
});

// MongoDB connection
mongoose
  .connect('mongodb+srv://jeydev007:upBXGlEQ66KmcDCY@cluster0.0rjah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(1); // Exit the process if the connection fails
  });
// Use the router for API routes
app.use("/api", router);

app.use(cors())

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
