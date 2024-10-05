const express = require("express");
const asyncHandler = require("express-async-handler");
const { Cart } = require("../../db/models");
const { restoreUser } = require("../../utils/auth");

const router = express.Router();

router.get("/cart", restoreUser, asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const cartItems = await Cart.findAll({
        where: { userId: req.user.id }
    });
    res.json(cartItems);
}));

router.delete("/cart/:id", restoreUser, asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const cartItemId = req.params.id;

    const cartItem = await Cart.findOne({
        where: { id: cartItemId, userId: req.user.id }
    });
    if (!cartItem) {
        return res.status(404).json({ message: "Cart Item not found" });
    }

    await cartItem.destroy();
    res.json({ message: "Cart Item deleted successfully" });
}));

router.post("/cart/plants/:id", restoreUser, asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const { id } = req.params;
    const {
        image_src,
        plant_name,
        pot_color,
        price_per_unit,
        quantity
    } = req.body;

    try {
        const cartItem = await Cart.create({
            userId: req.user.id, // Устанавливаем userId
            image_src,
            plant_name,
            pot_color,
            price_per_unit,
            quantity
        });

        res.status(201).json(cartItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}));

module.exports = router;
