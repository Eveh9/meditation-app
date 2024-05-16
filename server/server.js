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

  .get("/session", async (req, res) => {
    const userEmail = req.query.userEmail;
    const client = new MongoClient(MONGO_URI);
    const db = client.db("meditation-app");
    try {
      const response = await db.collection("sessions").find({
        userEmail,
      });
      const data = await response.toArray();
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error,
      });
    }
  })

  .post("/session", async (req, res) => {
    const { hours, minutes, seconds, userEmail, timestamp } = req.body;
    const sessionDate = {
      userEmail,
      timestamp,
      session: {
        hours,
        minutes,
        seconds,
      },
    };
    const client = new MongoClient(MONGO_URI);
    const db = client.db("meditation-app");
    try {
      const response = await db.collection("sessions").insertOne(sessionDate);
      if (response.acknowledged) {
        res.status(200).json({
          message: "sucess",
        });
      } else {
        res.status(500).json({
          message: "an error occured while trying to save your session",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error,
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
