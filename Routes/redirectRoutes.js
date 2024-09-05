const router = require("express").Router();
const redirectController = require("../Controllers/redirectController");

router.get("/:id", redirectController.redirectRoute);

module.exports = router;