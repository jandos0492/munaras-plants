const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const apiPlantsRoute = require("./api/plantsRouter");
const apiCartRoute = require("./api/cartRouter");
const keepAliveRouter = require("./api/keepAliveRouter");

router.use("/api", apiRouter);
router.use("/api", apiPlantsRoute);
router.use("/api", apiCartRoute);
router.use("/api", keepAliveRouter);


// Static routes
// Serve React build files in produciton
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    // Serve the frontend's index.html file at the root route
    router.get("/", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frotend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\?api).*/, (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
    router.get("/api/csrf/restore", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.json({});
    });
}

router.get("/hello/world", function(req, res) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send("Hello World!");
});

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;