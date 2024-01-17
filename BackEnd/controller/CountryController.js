import Country from "../models/Country.js";

export const getAll = async (req, res) => {
  try {
    const response = await Country.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log("Error.message");
  }
};

export const getById = async (req, res) => {
  try {
    const response = await Country.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log("Error.message");
  }
};

export const create = async (req, res) => {
  try {
    const response = await Country.create(req.body);
    res.status(201).json({ message: "country is create" });
  } catch (error) {
    console.log("Error.message");
  }
};

export const update = async (req, res) => {
  try {
    const response = await Country.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Country is update" });
  } catch (error) {
    console.log("Error.message");
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const response = await Country.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Country is delete" });
  } catch (error) {
    console.log("Error.message");
  }
};
