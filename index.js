require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://job-task-rrishiddh.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cfwc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/jwt", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: "JWT secret is missing" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ status: true, token });
  } catch (error) {
    console.error("Error creating token:", error.message);
    res.status(500).json({ status: false, error: error.message });
  }
});

async function run() {
  try {
    await client.connect();
    const allTasks = client.db("ToDo").collection("taskList");
    const userCollection = client.db("ToDo").collection("Users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { userEmail: user.userEmail };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/tasks", async (req, res) => {
      const task = {
        ...req.body,
        timestamp: new Date().toISOString(),
        position: 0,
      };
      const result = await allTasks.insertOne(task);
      res.send({ insertedId: result.insertedId, ...task });
    });

    app.get("/tasks", async (req, res) => {
      const userEmail = req.query.email;

      if (!userEmail) {
        return res.status(400).json({ message: "User email is required" });
      }

      try {
        const tasks = await allTasks.find({ userEmail }).toArray();
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
    });

    app.put("/tasks/:id", async (req, res) => {
      const { id } = req.params;

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid task ID" });
      }

      const updateFields = req.body;

      try {
        const result = await allTasks.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateFields }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.send(result);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to update task", error: error.message });
      }
    });

    app.delete("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      const result = await allTasks.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
run();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
