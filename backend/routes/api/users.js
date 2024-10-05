const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const router = express.Router();

const validateSignup = [
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more.")
        .custom((value) => {
            // Custom validation function to check for spaces
            if (/\s/.test(value)) {
                throw new Error("Password must not contain spaces.");
            }

            return true;
        }),
    handleValidationErrors,
];

// Sign up
router.post(
    "",
    validateSignup,
    asyncHandler(async (req, res, next) => {
        const { password, username } = req.body;

        try {
            const user = await User.signup({ username, password });

            await setTokenCookie(res, user);

            return res.json({
                user,
            });
        } catch (err) {

            const registeredUserWithUsername = await User.findOne({
                where: {
                    username
                }
            });

            if (registeredUserWithUsername) {
                return res.status(401).json({
                    errors: ["This username is already registered with Munara's Plants. Please Choose another one."]
                })
            }

            console.error("Signup failed.", err);
            return next(err);
        }
    }),
);

module.exports = router;