const express = require("express");
const router = express.Router();

const {
    create,
    aboutById,
    read,
    update,
    remove,
    list
} = require("../../controllers/about/about");
const { requireSignin, isAuth } = require("../../controllers/auth/auth");
const { userById } = require("../../controllers/user/user");

router.get("/about/:aboutId", read);
router.post("/about/create/:userId", requireSignin, isAuth, create);
router.put(
    "/about/:aboutId/:userId",
    requireSignin,
    isAuth,
    update
);
router.delete(
    "/about/:aboutId/:userId",
    requireSignin,
    isAuth,
    remove
);
router.get("/aboutslist", list);

router.param("aboutId", aboutById);
router.param("userId", userById);

module.exports = router;
