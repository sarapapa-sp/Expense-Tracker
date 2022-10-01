import express from "express"
import Expenseentry from "../models/entry.js";

export const addEntry = async (req, res) => {
      const newExpenseEntry = new Expenseentry(req.body);
      console.log("data : " + JSON.stringify(newExpenseEntry));

    //   res.status(200).json(newEntry);
        try {
            const saveEntry = await newExpenseEntry.save();
            res.status(200).json(saveEntry)
        } catch (err) {
          res.status(500).json(err);
        }
   
}