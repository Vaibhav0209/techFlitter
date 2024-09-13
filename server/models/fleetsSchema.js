const mongoose = require("mongoose");

const fleetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Please enter name"],
    },
    support_email: {
      type: String,
      unique: true,
      trim: true,
      require: [true, "please enter support email"],
    },
    alert_email: {
      type: String,
      trim: true,
      require: [true, "please enter alert email"],
    },
    fleet_type: {
      type: String,
      trim: true,
      require: [true, "please enter fleet type"],
    },
    billing_plan: {
      type: String,
      trim: true,
      require: [true, "please enter billing plan"],
    },
    suppport_phone_number: {
      type: Number,
      trim: true,
      require: [true, "please enter mobile number"],
    },
    address: {
      type: String,
      trim: true,
      require: [true, "please enter address"],
    },
    parking_requirement: {
      type: String,
      trim: true,
      require: [true, "please enter parking requirement"],
    },
    idel_vehicle: {
      type: String,
      trim: true,
      require: [true, "please enter idel vehicle"],
    },
    paused_vehicle: {
      type: String,
      trim: true,
      require: [true, "please enter paused vehicle"],
    },
    critical_bettery: {
      type: String,
      trim: true,
      require: [true, "please enter critical bettery"],
    },
    low_bettery: {
      type: String,
      trim: true,
      require: [true, "please enter low bettery"],
    },
    autoclose: {
      type: String,
      trim: true,
      require: [true, "please enter auto close vehicle"],
    },
    distance_lock: {
      type: String,
      trim: true,
      require: [true, "please enter distance lock"],
    },
    pauseride: {
      type: String,
      trim: true,
      require: [true, "please enter pause ride"],
    },
  },
  { timestamps: true }
);

const Fleets = mongoose.model("Fleet", fleetSchema);
module.exports = Fleets;
