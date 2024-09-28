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


router.get("/plants/:id", async (req, res) => {
    const plantId = req.params.id;
    try {
        const plant = await Plant.findByPk(plantId);

        if (!plant) {
            return res.status(404).json({ message: `Plant ${plantId} not found `});
        }
        res.json(plant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;