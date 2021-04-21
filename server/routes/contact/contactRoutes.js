const express = require("express");
const router = express.Router();

const {
    create,
    contactById,
    read,
    update,
    remove,
    list
} = require("../../controllers/contact/contact");
const { requireSignin, isAuth, isAdmin } = require("../../controllers/auth/auth");
const { userById } = require("../../controllers/user/user");

router.get("/contact/:contactId", read);
router.post("/contact/create/:userId", requireSignin, isAuth,  create);
router.put(
    "/contact/:contactId/:userId",
    requireSignin,
    isAuth,
    update
);
router.delete(
    "/contact/:contactId/:userId",
    requireSignin,
    isAuth,
    remove
);
router.get("/contacts", list);

router.param("contactId", contactById);
router.param("userId", userById);

module.exports = router;
