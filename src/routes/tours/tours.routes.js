const express = require("express");
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../../controllers/tours/tours.controller");

const toursRouter = express.Router();
// =============================================
// GET ALL TOURS REQUEST
// =============================================
toursRouter.get("/", getAllTours);
// =============================================
// GET ONE REQUEST
// =============================================
toursRouter.get("/:id", getTourById);
// =============================================
// CREATE TOUR REQUEST
// =============================================
toursRouter.post("/", createTour);
// =============================================
// UPDATE TOUR REQUEST
// =============================================
toursRouter.patch("/:id", updateTour);
// =============================================
// DELETE REQUEST
// =============================================
toursRouter.delete("/:id", deleteTour);

module.exports = toursRouter;
