const express = require("express");
const router = express.Router();

const {
    create,
    projectById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo
} = require("../../controllers/project/project");
const { requireSignin, isAuth } = require("../../controllers/auth/auth");
const { userById } = require("../../controllers/user/user");

router.get("/project/:projectId", read);
router.post("/project/create/:userId", requireSignin, isAuth, create);
router.delete(
    "/project/:projectId/:userId",
    requireSignin,
    isAuth,
    remove
);
router.put(
    "/project/:projectId/:userId",
    requireSignin,
    isAuth,
    update
);

router.get("/projects", list);
router.get("/projects/related/:projectId", listRelated);
router.get("/projects/categories", listCategories);
router.post("/projects/by/search", listBySearch);
router.get("/project/photo/:projectId", photo);
router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;
