'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Carts";
    return queryInterface.bulkInsert(options, [
      {
        "id": 1,
        "image_src": "https://static-task-assets.react-formula.com/ficus_ginseng_sky.jpeg",
        "plant_name": "Ficus Ginseng",
        "pot_color": "sky",
        "price_per_unit": 57,
        "quantity": 2
      },
      {
        "id": 2,
        "image_src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_stone.jpeg",
        "plant_name": "Dracaena Golden Heart",
        "pot_color": "stone",
        "price_per_unit": 87,
        "quantity": 1
      },
      {
        "id": 3,
        "image_src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_slate.jpeg",
        "plant_name": "Dracaena Golden Heart",
        "pot_color": "slate",
        "price_per_unit": 87,
        "quantity": 1
      },
      {
        "id": 4,
        "image_src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_sky.jpeg",
        "plant_name": "Dracaena Golden Heart",
        "pot_color": "sky",
        "price_per_unit": 87,
        "quantity": 1
      },
      {
        "id": 5,
        "image_src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_black.jpeg",
        "plant_name": "Dracaena Golden Heart",
        "pot_color": "black",
        "price_per_unit": 87,
        "quantity": 1
      },
      {
        "id": 6,
        "image_src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_amber.jpeg",
        "plant_name": "Dracaena Golden Heart",
        "pot_color": "amber",
        "price_per_unit": 87,
        "quantity": 1
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
