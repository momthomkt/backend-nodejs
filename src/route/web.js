import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/crud", homeController.getCrudPage);
    router.post("/handle-submit-form", homeController.handleSubmitForm);
    return app.use("/", router);
}
module.exports = initWebRoutes;