const router = require("express").Router();
const { Cart } = require("../../db/models");

router.get("/cart", async (req, res) => {
    try {
        const cartItems = await Cart.findAll();
        res.json(cartItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


// delete item fro the cart
router.delete("/cart/:id", async (req, res) => {
    const cartItemId = req.params.id;

    const cartItem = await Cart.findByPk(cartItemId);
    if (!cartItem) {
        return res.status(404).json({ message: "Cart Item not found" });
    }

    await cartItem.destroy();
    res.json({ message: "Cart Item deleted successfully" });
});

module.exports = router;