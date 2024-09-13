const { Router } = require("express");
const {
  addFleets,
  getAllFleets,
  getSingleFleet,
  updateFleet,
  deleteFleet,
} = require("../controller/fleetsCotroller");
const { addFleetsValidation } = require("../validations/fleetsValidation");
const router = Router();

router.post("/add-fleet", addFleetsValidation, addFleets);
router.post("/get-fleets", getAllFleets);
router.get("/get-fleet/:id", getSingleFleet);
router.patch("/update-fleet", addFleetsValidation, updateFleet);
router.delete("/delete-fleet/:id", deleteFleet);

module.exports = router;
