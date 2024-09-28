const router = require("express").Router();
const { Plant } = require("../../db/models");

router.get("/plants", async (req, res) => {
    try {
        const plants = await Plant.findAll({
            attributes: ["id", "name", "price", "images"],
        });
        res.json(plants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error "});
    }
});

module.exports = router;