import express from "express"
import Expenseentry from "../models/entry.js"

import { addEntry } from "../controller/expense.js";
const expenseentryRouter = express.Router()

// adding
expenseentryRouter.post("/", addEntry);

//getting
expenseentryRouter.get("/", async (req, res) => {
  console.log("entry to be displayed");
  try {
    const saveEntry = await Expenseentry.find()
    res.status(200).json(saveEntry);
  } catch (err) {
    res.status(500).json(err);
  }
});


export default expenseentryRouter