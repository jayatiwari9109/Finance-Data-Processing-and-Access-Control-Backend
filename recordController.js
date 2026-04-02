import Record from "../models/Record.js";

export const createRecord = async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};
