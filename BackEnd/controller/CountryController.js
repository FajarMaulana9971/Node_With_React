import Country from "../models/Country.js";

const handleResponse = (res, data, statusCode, message) => {
  res.status(statusCode).json({ message, data });
};

const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

export const getAll = async (req, res) => {
  try {
    const response = await Country.findAll();
    handleResponse(res, response, 200, "Countries retrieved successfully");
  } catch (error) {
    handleError(res, error);
  }
};

export const getById = async (req, res) => {
  try {
    const response = await Country.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (response) {
      handleResponse(res, response, 200, "Country retrieved successfully");
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const create = async (req, res) => {
  try {
    const response = await Country.create(req.body);
    handleResponse(res, response, 201, "Country created successfully");
  } catch (error) {
    handleError(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const [rowsAffected, response] = await Country.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (rowsAffected > 0) {
      handleResponse(res, response[0], 200, "Country updated successfully");
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const rowsAffected = await Country.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rowsAffected > 0) {
      res.status(200).json({ message: "Country deleted successfully" });
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
};
