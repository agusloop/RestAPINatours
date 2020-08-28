const express = require("express");

const app = express();

const tourModel = require("../../models/tours.models");
//Consts
const success = "Success";
const failed = "Failed";

const getAllTours = async (req, res) => {
  let { difficulty, price, sort, fields, page, limit } = req.query;
  const objFilter = { difficulty, price };
  //* Advance Filtering
  let queryStr = JSON.stringify(objFilter);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  let query = tourModel.find(JSON.parse(queryStr));

  try {
    if (!sort) {
      !difficulty
        ? (query = await query.sort("name"))
        : (query = await query.sort("-price"));
    } else {
      difficulty
        ? (query = await query.sort(sort))
        : (query = await query.sort(sort));
    }
    //Field Limiting
    if (fields) {
      fields = fields.split(",").join(" ");
      query = await tourModel
        .find(JSON.parse(queryStr))
        .sort(sort)
        .select(fields);
    }

    //Pagination
    page = page * 1 || 1;
    limit = limit * 1 || 100;
    const skip = (page - 1) * limit;
    fields = fields.split(",").join(" ");
    console.log("*** Fields", fields);

    query = await tourModel
      .find(JSON.parse(queryStr))
      .select(fields)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    if (page) {
      const numTours = await tourModel.countDocuments();
      if (skip > numTours) throw new Error("This page dosen´t exist");
    }

    return res.status(201).json({
      message: success,
      data: query,
    });
  } catch (error) {
    res.status(400).json({
      message: failed,
      error: error,
    });
    console.log("Error", error);
  }
};

const getTourById = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await tourModel.findById(id);
    res.status(201).json({
      message: success,
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      status: failed,
      message: "Invalid ID",
    });
  }
};

const createTour = async (req, res) => {
  try {
    const newTour = await tourModel.create(req.body);
    res.status(201).json({
      message: success,
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: failed,
      error: error,
    });
  }
};

const updateTour = async (req, res) => {
  const id = req.params.id;
  //DEsde nuestro archivo json a nuestro parametro
  try {
    const updatedTour = await tourModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      message: success,
      data: updatedTour,
    });
  } catch (error) {
    res.status(400).json({
      message: failed,
      error: error,
    });
  }
};

const deleteTour = async (req, res) => {
  const id = req.params.id;
  //DEsde nuestro archivo json a nuestro parametro
  try {
    await tourModel.findByIdAndDelete(id);
    res.status(200).json({
      status: success,
      message: "Tour deleted",
    });
  } catch (error) {
    res.status(400).json({
      message: failed,
    });
  }
};
module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
