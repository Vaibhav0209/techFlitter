const { body } = require("express-validator");
const addFleetsValidation = [
  body("support_email").trim().isEmail().withMessage("invalid email"),
  body("suppport_phone_number")
    .trim()
    .isNumeric()
    .isLength({ max: 12, min: 10 })
    .withMessage("invalid mobile number"),
  body("alert_email").trim().isEmail().withMessage("invalid email"),
  body("fleet_type").trim().notEmpty().withMessage("please enter fleet type"),
  body("name").trim().notEmpty().withMessage("please enter fleet name"),
  body("billing_plan")
    .trim()
    .notEmpty()
    .withMessage("please enter billing plan"),
  body("parking_requirement")
    .trim()
    .notEmpty()
    .withMessage("please enter parking requirement"),
  body("address").trim().notEmpty().withMessage("please enter address"),
  body("idel_vehicle")
    .trim()
    .notEmpty()
    .withMessage("please enter idel vehicle"),
  body("paused_vehicle")
    .trim()
    .notEmpty()
    .withMessage("please enter paused vehicle"),
  body("critical_bettery")
    .trim()
    .notEmpty()
    .withMessage("please enter critical bettery"),
  body("low_bettery").trim().notEmpty().withMessage("please enter low bettery"),
  body("autoclose").trim().notEmpty().withMessage("please enter autoclose"),
  body("distance_lock")
    .trim()
    .notEmpty()
    .withMessage("please enter lock distance"),
  body("pauseride").trim().notEmpty().withMessage("please enter paused ride"),
];
module.exports = { addFleetsValidation };
