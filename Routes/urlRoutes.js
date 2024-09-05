const router = require("express").Router();
const urlController = require("../Controllers/urlController.js");
const authMiddleware = require("../Middleware/authMiddleware.js");
const urlModel = require("../Models/urlModel.js");

// router.get("/", async (req, res) => {
//   urlModel.find({}, {}).then((url) => {
//     res.status(200).json(url);
//   });
// });

router.get("/", authMiddleware.verifyToken, urlController.getAllUrl);
router.post("/", authMiddleware.verifyToken, urlController.postNewUrl);

module.exports = router;