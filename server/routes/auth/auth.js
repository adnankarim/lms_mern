const express = require("express");
const router = express.Router();

const { signup, signin, signout, isAuth, isAdmin, isSuperAdmin } = require("../../controllers/auth/auth");
const { userSignupValidator } = require("../../validator");
const { requireSignin } = require("../../controllers/auth/auth")
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", isAuth, signout);

router.get("/hello", requireSignin, (req, res) => res.json("hello"));

module.exports = router;
