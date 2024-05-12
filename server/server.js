const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { loginHandler } = require("./handlers/authentication");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(
    cors({
      origin: "http://localhost:3000",
    })
  )

  .post("/login", loginHandler)
  .post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const client = new MongoClient(MONGO_URI);
    const db = client.db("meditation-app");
    try {
      const foundUser = await db.collection("users").findOne({ email });
      if (foundUser) {
        res.status(400).json({
          message: "Error occured while trying to create your account",
        });
      } else {
        const response = await db
          .collection("users")
          .insertOne({ name, email, password });
        if (response.acknowledged) {
          res.status(200).json({
            message: "success",
          });
        } else {
          res.status(400).json({
            message: "Error occured while trying to create your account",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Error ocurred",
      });
    }
  })
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));