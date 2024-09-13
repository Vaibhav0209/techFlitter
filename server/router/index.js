const { Router } = require("express");
const router = Router();
const fleetRouter = require("./fleets");

router.use(fleetRouter);

module.exports = router;
