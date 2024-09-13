const { validationResult } = require("express-validator");
const Fleets = require("../models/fleetsSchema");
exports.addFleets = async (req, res) => {
  const result = validationResult(req);
  const { errors } = result;
  const { support_email, address } = req.body;
  try {
    if (result.isEmpty()) {
      const alreadyFleet = await Fleets.findOne({
        support_email,
        address,
      });
      if (alreadyFleet) {
        return res.status(422).json({ message: "Fleet already added" });
      }
      const fleet = await Fleets(req?.body);
      await fleet.save();
      return res.status(201).json({ message: "Fleets created", success: true });
    } else {
      return res.status(400).json({ message: errors[0]?.msg });
    }
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

exports.getAllFleets = async (req, res) => {
  let { page, limit } = req.body;
  try {
    if (!page) {
      return res.status(422).json({ message: "unsufficient resource" });
    } else {
      page = page || 1;
      limit = limit || 10;
      const totalData = await Fleets.countDocuments();
      if (totalData == 0) {
        return res.status(404).json({ message: "data not available" });
      }
      const totalPages = Math.ceil(totalData / limit);
      const fleets = await Fleets.find()
        .skip((page - 1) * limit)
        .limit(limit);
      return res.status(200).json({
        data: fleets,
        success: true,
        page,
        totalPages,
        startIndex: (page - 1) * limit + 1,
        endIndex: page * limit,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

exports.getSingleFleet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(422).json({ message: "please sent valid credential" });
    }
    const fleet = await Fleets.findById(id);
    if (fleet) {
      return res.status(200).json({ data: fleet });
    } else {
      return res.status(404).json({ message: "fleet not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

exports.updateFleet = async (req, res) => {
  try {
    const result = validationResult(req);
    const { _id } = req.body;
    const { errors } = result;
    if (result.isEmpty()) {
      const fleet = await Fleets.findByIdAndUpdate(
        { _id },
        { $set: { ...req.body } }
      );
      if (fleet) {
        return res
          .status(200)
          .json({ message: "fleet updated", success: true });
      } else {
        return res.status(400).json({ message: "fleet not updated" });
      }
    } else {
      return res.status(400).json({ message: errors[0]?.msg });
    }
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

exports.deleteFleet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFleet = await Fleets.findByIdAndDelete(id);
    if (deleteFleet) {
      return res.status(200).json({ message: "fleet deleted", success: true });
    } else {
      return res.status(400).json({ message: "fleet not deleted" });
    }
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};
