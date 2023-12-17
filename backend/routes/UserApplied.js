const express = require("express");
const {
  addToApply,
  fetchCompaniesByUserId,
} = require("../controller/UserApplied");

const router = express.Router();

router.post("/", addToApply);
router.get("/", fetchCompaniesByUserId);

exports.router = router;
