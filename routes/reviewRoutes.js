const express = require("express");
const authController = require("../controllers/authController");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

// router.param("id", tourController.checkID);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.createReview,
  );

router.route("/:id").get(authController.protect, reviewController.getReview);

// router
//   .route("/")
//   .get(authController.protect, tourController.getAllTours)
//   .post(tourController.createTour);
// router
//   .route("/:id")
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(
//     authController.protect,
//     authController.restrictTo("admin", "lead-guide"),
//     tourController.deleteTour,
//   );

module.exports = router;
