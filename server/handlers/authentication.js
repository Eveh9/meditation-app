const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI);
  const db = client.db("meditation-app");
  try {
    const foundUser = await db.collection("users").findOne({ email, password });
    res.status(200).json({
      status: 200,
      user: {
        name: foundUser.name,
        email: foundUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error ocurred",
    });
  }
};
module.exports = { loginHandler };
