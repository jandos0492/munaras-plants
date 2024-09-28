'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Plants"
    return queryInterface.bulkInsert(options, [
      {
        "botanical_name": "Philodendron birkin",
        "care_instructions": "Place the Philodendron Birkin in bright, indirect light. Water when the top inch of soil feels dry, ensuring good drainage. Maintain a moderate humidity level and fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Philodendron Birkin is a stunning houseplant known for its dark green leaves adorned with striking white pinstripes. Its compact and upright growth makes it an elegant addition to any indoor space.",
        "id": 16,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/philodendron_birkin_stone.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/philodendron_birkin_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/philodendron_birkin_black.jpeg"
          }
        ]),
        "name": "Philodendron Birkin",
        "price": 37
      },
      {
        "botanical_name": "Sansevieria trifasciata",
        "care_instructions": "Place the Snake Plant in bright, indirect light, although it can tolerate low light levels. Allow the soil to dry out completely between waterings, as overwatering can cause root rot. Provide well-draining soil and a pot with drainage holes. Fertilize sparingly, once every 2-3 months, with a balanced, water-soluble fertilizer during the growing season.",
        "description": "The Snake Plant, also known as Mother-in-Law's Tongue, is a hardy succulent known for its tall, upright leaves with striking green and yellow variegation. This low-maintenance plant is perfect for beginners and can thrive in a variety of indoor conditions.",
        "id": 5,
        "images": JSON.stringify([
          {
            "pot_color": "white",
            "src": "https://static-task-assets.react-formula.com/snake_plant_white.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/snake_plant_black.jpeg"
          }
        ]),
        "name": "Snake Plant",
        "price": 27
      },
      {
        "botanical_name": "Anthurium andraeanum",
        "care_instructions": "Place in bright, indirect light and water when the top inch of soil feels dry. Ensure high humidity and avoid drafts. Fertilize every 6-8 weeks during the growing season with a high-phosphorus fertilizer to encourage blooming.",
        "description": "The Red Anthurium, also known as the Flamingo Flower, is prized for its glossy, heart-shaped leaves and vibrant red spathes that surround a yellow or white spadix. It is a popular choice for adding a tropical touch to indoor spaces.",
        "id": 11,
        "images": JSON.stringify([
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/red_anthurium_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/red_anthurium_black.jpeg"
          }
        ]),
        "name": "Red Anthurium",
        "price": 37
      },
      {
        "botanical_name": "Sansevieria trifasciata",
        "care_instructions": "Place in indirect light or low light conditions. Water sparingly, allowing the soil to dry out completely between waterings. It tolerates neglect and thrives with minimal care, requiring occasional feeding with a balanced fertilizer.",
        "description": "Commonly known as Snake Plant or Mother-in-law's Tongue, this hardy plant is known for its upright, sword-like leaves with green and yellow variegation. It's an excellent air purifier and very low-maintenance.",
        "id": 41,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/big_sansevieria_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/big_sansevieria_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/big_sansevieria_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/big_sansevieria_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/big_sansevieria_amber.jpeg"
          }
        ]),
        "name": "Big Sansevieria",
        "price": 137
      },
      {
        "botanical_name": "Maranta leuconeura",
        "care_instructions": "Place in bright, indirect light and keep the soil consistently moist but not waterlogged. Maintain high humidity by misting regularly or using a humidity tray. Fertilize every 2-4 weeks during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Red Prayer Plant is known for its striking, colorful foliage featuring deep green leaves with red veins and a unique pattern. Its leaves fold up at night, resembling hands in prayer, which gives the plant its common name.",
        "id": 10,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/red_prayer_plant_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/red_prayer_plant_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/red_prayer_plant_sky.jpeg"
          }
        ]),
        "name": "Red Prayer Plant",
        "price": 37
      },
      {
        "botanical_name": "Schefflera arboricola variegata",
        "care_instructions": "Place the Variegated Schefflera in bright, indirect light, although it can tolerate lower light conditions. Water the plant when the top inch of soil feels dry, ensuring proper drainage to prevent root rot. Maintain moderate humidity levels and fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Variegated Schefflera, also known as the Dwarf Umbrella Tree, is an attractive houseplant featuring glossy green leaves splashed with creamy yellow or white variegation. Its vibrant foliage adds a tropical feel to indoor spaces, making it a popular decorative choice.",
        "id": 3,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/variegated_schefflera_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/variegated_schefflera_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/variegated_schefflera_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/variegated_schefflera_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/variegated_schefflera_amber.jpeg"
          }
        ]),
        "name": "Variegated Schefflera",
        "price": 87
      },
      {
        "botanical_name": "Spathiphyllum",
        "care_instructions": "Place the Peace Lily in low to bright indirect light. Keep the soil consistently moist but not waterlogged, and mist the leaves regularly to maintain humidity. Fertilize every 6-8 weeks during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Peace Lily is a popular indoor plant admired for its lush, dark green leaves and elegant white flowers. It is known for its air-purifying qualities and its ability to thrive in low-light conditions.",
        "id": 17,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/peace_lily_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/peace_lily_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/peace_lily_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/peace_lily_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/peace_lily_amber.jpeg"
          }
        ]),
        "name": "Peace Lily",
        "price": 67
      },
      {
        "botanical_name": "Ficus lyrata",
        "care_instructions": "Place the Small Fiddle Leaf Fig in bright, indirect light, avoiding direct sunlight. Water it when the top inch of soil feels dry, ensuring the soil is well-drained. Maintain moderate humidity and avoid drafts. Fertilize every 4-6 weeks during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The small Fiddle Leaf Fig is a compact version of the popular Fiddle Leaf Fig, characterized by its large, violin-shaped leaves that add a bold, architectural element to any indoor space.",
        "id": 24,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/lil_fiddle_leaf_fig_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/lil_fiddle_leaf_fig_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/lil_fiddle_leaf_fig_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/lil_fiddle_leaf_fig_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/lil_fiddle_leaf_fig_amber.jpeg"
          }
        ]),
        "name": "Lil Fiddle Leaf Fig",
        "price": 67
      },
      {
        "botanical_name": "Chamaedorea elegans",
        "care_instructions": "Place the Parlor Palm in low to bright indirect light. Water when the top inch of soil is dry, and ensure good drainage to prevent root rot. Maintain moderate humidity and fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Parlor Palm is a classic houseplant known for its graceful, arching fronds and ability to thrive in low light. It adds a touch of tropical elegance to any indoor setting and is easy to care for.",
        "id": 18,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/parlor_palm_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/parlor_palm_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/parlor_palm_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/parlor_palm_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/parlor_palm_amber.jpeg"
          }
        ]),
        "name": "Parlor Palm",
        "price": 57
      },
      {
        "botanical_name": "Strelitzia reginae",
        "care_instructions": "Place in bright, indirect light or direct sunlight for best flowering. Water thoroughly when the top inch of soil is dry, and ensure good drainage. Maintain high humidity and fertilize every 2-4 weeks during the growing season with a balanced fertilizer.",
        "description": "The Bird of Paradise is a striking tropical plant known for its vibrant orange and blue flowers that resemble a bird in flight. It features large, banana-like leaves that add a lush, exotic feel to any space.",
        "id": 40,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/bird_of_paradise_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/bird_of_paradise_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/bird_of_paradise_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/bird_of_paradise_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/bird_of_paradise_amber.jpeg"
          }
        ]),
        "name": "Bird of Paradise",
        "price": 187
      },
      {
        "botanical_name": "Ficus lyrata",
        "care_instructions": "Place in bright, indirect light near a south or west-facing window. Water when the top inch of soil is dry, ensuring thorough watering and allowing excess water to drain away. Use a well-draining potting mix and a pot with drainage holes. Fertilize every 4-6 weeks during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Fiddle Leaf Fig is a trendy houseplant known for its large, violin-shaped leaves and tall, sculptural growth habit. It is a statement plant that can add a bold, architectural element to any room.",
        "id": 31,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/fiddle_leaf_fig_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/fiddle_leaf_fig_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/fiddle_leaf_fig_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/fiddle_leaf_fig_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/fiddle_leaf_fig_amber.jpeg"
          }
        ]),
        "name": "Fiddle Leaf Fig",
        "price": 217
      },
      {
        "botanical_name": "Chamaedorea cataractarum",
        "care_instructions": "Place the Cat Palm in bright, indirect light, and keep the soil consistently moist but not waterlogged. High humidity is beneficial, so mist the fronds regularly or use a humidity tray. Feed with a balanced liquid fertilizer every 4-6 weeks during the growing season.",
        "description": "The Cat Palm is a lush, clump-forming palm with feathery, arching fronds that create a dense, tropical look. Perfect for adding greenery to indoor spaces, this plant is beloved for its air-purifying qualities and elegant appearance.",
        "id": 36,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/cat_palm_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/cat_palm_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/cat_palm_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/cat_palm_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/cat_palm_amber.jpeg"
          }
        ]),
        "name": "Cat Palm",
        "price": 157
      },
      {
        "botanical_name": "Pachira aquatica",
        "care_instructions": "Place in bright, indirect light. Water thoroughly when the top inch of soil is dry, ensuring good drainage. Maintain moderate humidity and keep away from cold drafts. Fertilize every 2-3 months during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Money Tree is a popular houseplant known for its braided trunk and glossy green leaves. It is often associated with good luck and prosperity, making it a favored choice for homes and offices.",
        "id": 22,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/money_tree_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/money_tree_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/money_tree_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/money_tree_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/money_tree_amber.jpeg"
          }
        ]),
        "name": "Money Tree",
        "price": 157
      },
      {
        "botanical_name": "Ficus elastica tineke",
        "care_instructions": "Place in bright, indirect light to maintain its variegation. Water when the top inch of soil is dry, ensuring thorough watering and allowing excess water to drain away. Use a well-draining potting mix and a pot with drainage holes. Fertilize every 2-3 months during the growing season with a balanced, water-soluble fertilizer.",
        "description": "Ficus Teneke, also known as Variegated Rubber Plant, features broad, glossy leaves with striking green, cream, and pink variegation. It is a resilient and attractive houseplant that can add a touch of elegance to indoor spaces.",
        "id": 32,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/ficus_teneke_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/ficus_teneke_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/ficus_teneke_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/ficus_teneke_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/ficus_teneke_amber.jpeg"
          }
        ]),
        "name": "Ficus Teneke",
        "price": 67
      },
      {
        "botanical_name": "Hoya kerrii",
        "care_instructions": "Place the Hoya Heart in bright, indirect light to maintain its vibrant green color and healthy growth. Water sparingly, allowing the soil to dry out completely between waterings to prevent root rot, as it is highly drought-tolerant. Ensure it is planted in well-draining soil and a pot with drainage holes. Fertilize sparingly, only once or twice a year, with a balanced, diluted fertilizer during the growing season.",
        "description": "The Hoya Heart, also known as the Sweetheart Plant, is a charming succulent known for its thick, heart-shaped leaves. It is a slow-growing, low-maintenance plant often given as a symbol of love and affection.",
        "id": 27,
        "images": JSON.stringify([
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/hoya_heart_black.jpeg"
          }
        ]),
        "name": "Hoya Heart",
        "price": 27
      },
      {
        "botanical_name": "Bromeliaceae",
        "care_instructions": "Place the Bromeliad Summer in bright, indirect light to promote flowering. Water the central cup formed by its leaves and keep it filled with water, while ensuring the soil is moist but not waterlogged. Maintain high humidity levels and avoid letting the plant sit in water to prevent root rot. Fertilize lightly every 2-4 weeks during the growing season with a diluted balanced fertilizer.",
        "description": "Bromeliad Summer is a striking plant known for its vibrant, long-lasting flower bracts and rosette of stiff, arching leaves. These tropical beauties bring a splash of color to indoor environments and are admired for their exotic appearance.",
        "id": 4,
        "images": JSON.stringify([
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/summer_bromeliad_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/summer_bromeliad_black.jpeg"
          }
        ]),
        "name": "Summer Bromeliad",
        "price": 37
      },
      {
        "botanical_name": "Philodendron hederaceum",
        "care_instructions": "Place the Philodendron Heartleaf in bright, indirect light, but it can also tolerate low light conditions. Water when the top inch of soil feels dry, and ensure the pot has good drainage. Maintain a humid environment and mist the leaves occasionally. Fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Philodendron Heartleaf is a popular vining houseplant known for its heart-shaped, dark green leaves. It is easy to care for and can thrive in various indoor conditions, making it a favorite among plant enthusiasts.",
        "id": 15,
        "images": JSON.stringify([
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/philodendron_heartleaf_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/philodendron_heartleaf_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/philodendron_heartleaf_black.jpeg"
          }
        ]),
        "name": "Philodendron Heartleaf",
        "price": 37
      },
      {
        "botanical_name": "Mixed Group",
        "care_instructions": "Water when the soil is fully dry and you can't go wrong.",
        "description": "No fuss plants. This group of three low-maintenance and drought tolerant plants make plant care a breeze and look cute at the same time. This trio, including the Ponytail Palm, Sansevieria Hahnii, and the Sansevieria Laurentii Superba, makes a great gift for the beginner plant parent in your life.",
        "id": 33,
        "images": JSON.stringify([
          {
            "pot_color": "white",
            "src": "https://static-task-assets.react-formula.com/easy_care_set_white.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/easy_care_set_black.jpeg"
          }
        ]),
        "name": "Easy Care Set",
        "price": 67
      },
      {
        "botanical_name": "Pachira aquatica",
        "care_instructions": "Place the Money Tree Braid in bright, indirect light. Water it thoroughly when the top inch of soil is dry, and ensure the pot has good drainage. Maintain a humid environment by misting the leaves or using a humidity tray. Fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Money Tree Braid is a popular indoor plant known for its braided trunk and lush, green foliage. It is often associated with bringing good luck and prosperity to its owners. This unique braided look will stand out from the crowd.",
        "id": 23,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/money_tree_braid_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/money_tree_braid_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/money_tree_braid_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/money_tree_braid_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/money_tree_braid_amber.jpeg"
          }
        ]),
        "name": "Money Tree Braid",
        "price": 57
      },
      {
        "botanical_name": "Mixed Set",
        "care_instructions": "Place the these in indirect light or partial shade. These require very little water and will thrive on their own.",
        "description": "This set is perfect for beginners. Three easy and adaptable plants, including a Sansevieria, ZZ Plant, and Hoya variety",
        "id": 26,
        "images": JSON.stringify([
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/low_water_set_black.jpeg"
          }
        ]),
        "name": "Low Water Set",
        "price": 67
      },
      {
        "botanical_name": "Monstera deliciosa",
        "care_instructions": "Place in bright, indirect light. Water when the top inch of soil is dry, ensuring thorough drainage. Maintain humidity by misting the leaves or using a humidity tray. Fertilize every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer.",
        "description": "The Monstera, commonly referred to as the Swiss Cheese Plant, is a tropical houseplant known for its large, perforated leaves. Its striking foliage features distinctive splits and holes, giving it a unique, exotic appearance that adds a dramatic flair to indoor spaces.",
        "id": 20,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/monstera_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/monstera_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/monstera_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/monstera_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/monstera_amber.jpeg"
          }
        ]),
        "name": "Monstera",
        "price": 157
      },
      {
        "botanical_name": "Sansevieria masoniana",
        "care_instructions": "To care for a Whale Fin Sansevieria, place it in bright, indirect light, though it can also adapt to lower light conditions. Water the plant sparingly, allowing the soil to dry out completely between waterings, as it is highly drought-tolerant and prone to root rot if overwatered. Use a well-draining potting mix and a pot with drainage holes to ensure proper drainage. Fertilize the plant once every 2-3 months during the growing season (spring and summer) with a balanced, diluted fertilizer, though it can thrive with minimal feeding.",
        "description": "The Whale Fin Sansevieria, also known as Sansevieria masoniana, is a striking succulent recognized for its large, paddle-shaped leaves that resemble a whale's fin. Its leaves are typically dark green with lighter, mottled patterns, making it a standout addition to any plant collection. This hardy plant is low-maintenance and can tolerate a wide range of indoor conditions, including low light and infrequent watering. The Whale Fin Sansevieria's unique appearance and resilience make it a popular choice for both beginners and experienced plant enthusiasts.",
        "id": 2,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/whale_fin_sansevieria_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/whale_fin_sansevieria_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/whale_fin_sansevieria_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/whale_fin_sansevieria_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/whale_fin_sansevieria_amber.jpeg"
          }
        ]),
        "name": "Whale Fin Sansevieria",
        "price": 67
      },
      {
        "botanical_name": "Zamioculcas zamiifolia",
        "care_instructions": "To care for a Zanzibar Gem plant, place it in a location with low to bright indirect light, as it is highly adaptable and can tolerate low-light conditions. Water the plant sparingly, allowing the soil to dry out completely between waterings to avoid overwatering, which can lead to root rot. Ensure the plant is in a well-draining potting mix and a pot with drainage holes to prevent water accumulation. Fertilize the plant lightly every 2-3 months during the growing season (spring and summer) with a diluted balanced fertilizer, but it can thrive even with minimal feeding.",
        "description": "The Zanzibar Gem, also known as Zamioculcas zamiifolia, is a hardy houseplant appreciated for its lush, glossy green foliage. Its thick, waxy leaves are designed to retain water, making it highly drought-tolerant and perfect for low-maintenance indoor environments. This resilient plant can thrive in low light conditions and requires minimal care, making it a popular choice for both novice and experienced plant enthusiasts. With its upright, sculptural growth habit, the Zanzibar Gem adds a touch of elegance and greenery to any space.",
        "id": 1,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/zanzibar_gem_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/zanzibar_gem_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/zanzibar_gem_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/zanzibar_gem_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/zanzibar_gem_amber.jpeg"
          }
        ]),
        "name": "Zanzibar Gem",
        "price": 97
      },
      {
        "botanical_name": "Monstera Adansonii",
        "care_instructions": "Place in bright, indirect light. Water when the top inch of soil is dry, ensuring the soil remains moist but not soggy. Maintain high humidity by misting the leaves regularly. Fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "Monstera Adansonii, often called the Swiss Cheese Vine, is a popular houseplant known for its unique, hole-filled leaves. Its trailing habit and vibrant green foliage make it a striking addition to any indoor plant collection.",
        "id": 21,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/monstera_adansonii_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/monstera_adansonii_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/monstera_adansonii_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/monstera_adansonii_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/monstera_adansonii_amber.jpeg"
          }
        ]),
        "name": "Monstera Adansonii",
        "price": 67
      },
      {
        "botanical_name": "Maranta leuconeura neon",
        "care_instructions": "Place the Neon Prayer Plant in bright, indirect light. Keep the soil consistently moist but not waterlogged, and provide high humidity by misting the leaves or using a humidity tray. Fertilize every 4-6 weeks during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Neon Prayer Plant is a vibrant houseplant known for its striking, neon-green leaves with dark green veins. Its unique foliage folds up at night, giving it the name 'prayer plant.'",
        "id": 19,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/neon_prayer_plant_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/neon_prayer_plant_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/neon_prayer_plant_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/neon_prayer_plant_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/neon_prayer_plant_amber.jpeg"
          }
        ]),
        "name": "Neon Prayer Plant",
        "price": 67
      },
      {
        "botanical_name": "Calathea ornata",
        "care_instructions": "Place the Calathea Pinstripe in bright, indirect light and keep the soil consistently moist but not soggy. Maintain high humidity by misting regularly or using a humidifier, and fertilize monthly with a balanced, water-soluble fertilizer during the growing season.",
        "description": "Calathea Pinstripe is a stunning houseplant known for its dark green leaves adorned with pink or white pinstripes. The underside of the leaves is a rich purple, adding to its visual appeal and making it a favorite among plant enthusiasts.",
        "id": 37,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/calathea_pinstripe_stone.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/calathea_pinstripe_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/calathea_pinstripe_black.jpeg"
          }
        ]),
        "name": "Calathea Pinstripe",
        "price": 47
      },
      {
        "botanical_name": "Pachira aquatica",
        "care_instructions": "Place the Small Money Tree in bright, indirect light. Water it thoroughly when the top inch of soil is dry, but avoid letting it sit in water. Maintain moderate humidity and fertilize once a month during the growing season with a balanced liquid fertilizer.",
        "description": "The Small Money Tree is a popular indoor plant known for its braided trunk and lush, green leaves. It's often associated with bringing good luck and prosperity to its owner.",
        "id": 7,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/smoll_money_tree_stone.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/smoll_money_tree_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/smoll_money_tree_black.jpeg"
          }
        ]),
        "name": "Smoll Money Tree",
        "price": 37
      },
      {
        "botanical_name": "Dracaena fragrans",
        "care_instructions": "Place the Dracaena Golden Heart in bright, indirect light, though it can tolerate lower light levels. Water when the top inch of soil feels dry, and ensure proper drainage to prevent root rot. Fertilize every 2-3 months during the growing season with a balanced, water-soluble fertilizer.",
        "description": "Dracaena Golden Heart is a striking houseplant with variegated leaves featuring bright green centers and golden-yellow edges. Its tall, upright growth habit makes it an attractive addition to any room, bringing a touch of tropical flair.",
        "id": 39,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/dracaena_golden_heart_amber.jpeg"
          }
        ]),
        "name": "Dracaena Golden Heart",
        "price": 87
      },
      {
        "botanical_name": "Sansevieria zeylanica",
        "care_instructions": "Sansevieria zeylanica thrives in bright, indirect light but can tolerate low light conditions. Water the plant sparingly, allowing the soil to dry out completely between waterings. It's tolerant of dry air and requires minimal feeding; fertilize once during the growing season with a cactus or succulent fertilizer.",
        "description": "Sansevieria zeylanica, commonly known as the Ceylon Bowstring Hemp, features long, sword-shaped leaves with dark green cross-banding. It's a robust and low-maintenance plant perfect for beginners.",
        "id": 9,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/sansevieria_zeylanica_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/sansevieria_zeylanica_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/sansevieria_zeylanica_sky.jpeg"
          }
        ]),
        "name": "Sansevieria zeylanica",
        "price": 57
      },
      {
        "botanical_name": "Epipremnum aureum (baltic blue)",
        "care_instructions": "Place in bright, indirect light but can adapt to low light. Water when the top inch of soil is dry, and ensure good drainage. It thrives in normal indoor humidity and benefits from occasional feeding with a balanced fertilizer during the growing season.",
        "description": "The Baltic Pothos is a popular trailing houseplant with heart-shaped leaves featuring a striking blue-green hue. It's known for its ease of care and ability to thrive in a variety of indoor conditions.",
        "id": 43,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/baltic_pothos_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/baltic_pothos_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/baltic_pothos_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/baltic_pothos_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/baltic_pothos_amber.jpeg"
          }
        ]),
        "name": "Baltic Pothos",
        "price": 57
      },
      {
        "botanical_name": "Ficus elastica",
        "care_instructions": "Place the Burgundy Rubber Tree in bright, indirect light, though it can tolerate lower light conditions. Water when the top inch of soil is dry, ensuring proper drainage to prevent overwatering. Feed with a balanced liquid fertilizer every 2-3 months during the growing season.",
        "description": "The Burgundy Rubber Tree is a popular houseplant with large, glossy leaves that are deep burgundy in color. Its bold foliage and easy care make it a striking and low-maintenance addition to any indoor space.",
        "id": 38,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/burgundy_rubber_tree_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/burgundy_rubber_tree_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/burgundy_rubber_tree_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/burgundy_rubber_tree_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/burgundy_rubber_tree_amber.jpeg"
          }
        ]),
        "name": "Burgundy Rubber Tree",
        "price": 87
      },
      {
        "botanical_name": "Aglaonema siam aurora",
        "care_instructions": "Place in low to bright indirect light, avoiding direct sunlight which can scorch the leaves. Water thoroughly when the top inch of soil is dry, and ensure the pot has good drainage. Prefers moderate humidity and benefits from occasional feeding with a balanced fertilizer during the growing season.",
        "description": "Aglaonema Siam is a striking indoor plant known for its vibrant red and green leaves. Its colorful foliage adds a bold, decorative touch to any indoor setting",
        "id": 44,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/aglaonema_siam_stone.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/aglaonema_siam_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/aglaonema_siam_black.jpeg"
          }
        ]),
        "name": "Aglaonema Siam",
        "price": 37
      },
      {
        "botanical_name": "Scindapsus pictus",
        "care_instructions": "Place the Silver Pothos in low to bright, indirect light. Allow the top inch of soil to dry out between waterings. This plant appreciates occasional misting to increase humidity and should be fertilized every 2-3 months with a diluted houseplant fertilizer.",
        "description": "The Silver Pothos is a vining plant admired for its heart-shaped leaves with distinctive silver variegation. It's an excellent choice for hanging baskets or as a trailing plant on shelves.",
        "id": 8,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/silver_pothos_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/silver_pothos_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/silver_pothos_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/silver_pothos_black.jpeg"
          }
        ]),
        "name": "Silver Pothos",
        "price": 47
      },
      {
        "botanical_name": "Guzmania bromeliad",
        "care_instructions": "Place in bright, indirect light. Keep the central cup filled with water and maintain high humidity by misting regularly. Use well-draining soil and water the soil moderately, ensuring it dries out between waterings. Fertilize monthly during the growing season with a balanced, diluted fertilizer.",
        "description": "Guzmania Bromeliads are tropical plants known for their vibrant, long-lasting flowers and striking, glossy green leaves. These epiphytic plants often feature a rosette of leaves with a central flower spike, adding a splash of color to any indoor space.",
        "id": 28,
        "images": JSON.stringify([
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/guzmania_bromeliad_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/guzmania_bromeliad_black.jpeg"
          }
        ]),
        "name": "Guzmania Bromeliad",
        "price": 37
      },
      {
        "botanical_name": "Calathea concinna",
        "care_instructions": "Place in bright, indirect light and avoid direct sunlight. Keep the soil consistently moist but not waterlogged, and ensure high humidity by misting regularly or using a humidity tray. Use a well-draining, peat-based potting mix. Fertilize monthly during the growing season with a diluted balanced fertilizer.",
        "description": "Freddie Calathea is a stunning houseplant known for its elongated, lance-shaped leaves adorned with dark green stripes on a light green background. Its striking foliage makes it a popular choice for adding a touch of tropical beauty to indoor spaces.",
        "id": 30,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/freddie_calathea_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/freddie_calathea_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/freddie_calathea_sky.jpeg"
          }
        ]),
        "name": "Freddie Calathea",
        "price": 37
      },
      {
        "botanical_name": "Zamioculcas zamiifolia raven",
        "care_instructions": "Place in low to bright indirect light and water sparingly, allowing the soil to dry out completely between waterings. Use a well-draining potting mix and a pot with drainage holes. Fertilize lightly every 2-3 months during the growing season with a diluted balanced fertilizer.",
        "description": "he Raven Zanzibar Gem is a striking variety of the traditional Zanzibar Gem, distinguished by its dark, almost black foliage. It is a hardy and low-maintenance plant, perfect for modern interiors.",
        "id": 12,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/raven_zanzibar_gem_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/raven_zanzibar_gem_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/raven_zanzibar_gem_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/raven_zanzibar_gem_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/raven_zanzibar_gem_amber.jpeg"
          }
        ]),
        "name": "Raven Zanzibar Gem",
        "price": 67
      },
      {
        "botanical_name": "Pachira aquatica",
        "care_instructions": "Place the plant in bright, indirect light. Water it thoroughly when the top inch of soil is dry, but avoid letting it sit in water. Maintain moderate humidity and fertilize once a month during the growing season with a balanced liquid fertilizer.",
        "description": "The Money Tree is a popular indoor plant known for its braided trunk and lush, green leaves. It's often associated with bringing good luck and prosperity to its owner. This plant group consits of multiple money trees for extra luck!",
        "id": 6,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/money_tree_forest_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/money_tree_forest_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/money_tree_forest_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/money_tree_forest_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/money_tree_forest_amber.jpeg"
          }
        ]),
        "name": "Money Tree Forest",
        "price": 77
      },
      {
        "botanical_name": "Beaucarnea recurvata",
        "care_instructions": "Place the Ponytail Palm in bright light to full sun. Allow the soil to dry out completely between waterings, and water sparingly to avoid root rot. Use a well-draining potting mix and a pot with drainage holes. Fertilize sparingly, about once or twice a year, with a balanced, slow-release fertilizer.",
        "description": "The Ponytail Palm, also known as the Elephant Foot Tree, is a unique houseplant with a swollen trunk base and long, arching, strap-like leaves. Despite its name, it is not a true palm and is known for its drought tolerance.",
        "id": 14,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/ponytail_palm_tree_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/ponytail_palm_tree_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/ponytail_palm_tree_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/ponytail_palm_tree_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/ponytail_palm_tree_amber.jpeg"
          }
        ]),
        "name": "Ponytail Palm Tree",
        "price": 127
      },
      {
        "botanical_name": "Chamaedorea seifrizii",
        "care_instructions": "Place in bright, indirect light but can tolerate low light. Water consistently to keep the soil lightly moist but not soggy. Prefers higher humidity and benefits from regular misting. Fertilize monthly during the growing season with a balanced liquid fertilizer.",
        "description": "The Bamboo Palm is a graceful, clumping palm with thin, reed-like stems and feathery, arching fronds. It is an effective air purifier and adds a touch of tropical elegance to indoor spaces.",
        "id": 42,
        "id": 42,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/bamboo_palm_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/bamboo_palm_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/bamboo_palm_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/bamboo_palm_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/bamboo_palm_amber.jpeg"
          }
        ]),
        "name": "Bamboo Palm",
        "price": 167
      },
      {
        "botanical_name": "Epipremnum aureum",
        "care_instructions": "Place in bright, indirect light but can tolerate low light. Water when the top inch of soil is dry, allowing excess water to drain away. Use a well-draining potting mix and a pot with drainage holes. Fertilize every 2-3 months during the growing season with a balanced, water-soluble fertilizer.",
        "description": "Gold Pothos, also known as Devil's Ivy, is a popular houseplant admired for its heart-shaped leaves with yellow variegation. It is a hardy, low-maintenance plant that can thrive in a variety of light conditions, making it ideal for beginners.",
        "id": 29,
        "images": JSON.stringify([
          {
            "pot_color": "white",
            "src": "https://static-task-assets.react-formula.com/gold_pothos_white.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/gold_pothos_black.jpeg"
          }
        ]),
        "name": "Gold Pothos",
        "price": 27
      },
      {
        "botanical_name": "Nephrolepis obliterata",
        "care_instructions": "Place the Kimberly Queen Fern in bright, indirect light or partial shade. Keep the soil consistently moist but not waterlogged, and ensure good drainage. Maintain high humidity by misting the fronds regularly or using a humidity tray. Fertilize monthly during the growing season with a balanced, water-soluble fertilizer.",
        "description": "The Kimberly Queen Fern is a lush, evergreen fern with upright, sword-shaped fronds that add a touch of elegance to indoor and outdoor spaces. It is known for its resilience and ease of care.",
        "id": 25,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_black.jpeg"
          },
          {
            "pot_color": "amber",
            "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_amber.jpeg"
          }
        ]),
        "name": "Kimberly Queen Fern",
        "price": 57
      },
      {
        "botanical_name": "Mixed Group",
        "care_instructions": "Place in bright, indirect light.  Use a well-draining potting mix and a pot with drainage holes. Fertilize every 2-3 months during the growing season with a balanced, water-soluble fertilizer.",
        "description": "Want something more than green? The plants offer a pop of color. You'll get Red Anthurium, Yellow Bromeliad, and Bromeliad Summer. Each include their own vibrant, long-lasting flowers that will brighten up your home. Cool!",
        "id": 34,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/colourful_set_stone.jpeg"
          },
          {
            "pot_color": "slate",
            "src": "https://static-task-assets.react-formula.com/colourful_set_slate.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/colourful_set_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/colourful_set_black.jpeg"
          }
        ]),
        "name": "Colourful Set",
        "price": 117
      },
      {
        "botanical_name": "Epipremnum aureum",
        "care_instructions": "Place the Pothos plants in bright, indirect light, though it can tolerate low light. Water when the top inch of soil is dry, and ensure the pot has good drainage. Fertilize monthly during the growing season with a balanced, water-soluble fertilizer. Prune as needed to maintain the desired shape and encourage bushier growth.",
        "description": "This adorable and lively trio of pothos is ready to sit front and center on your shelf or windowsill. This set consists of the Pearls & Jade, Marble Queen, and Golden Pothos, each with its own striking variegation. Happiest in bright indirect light, this group of easy, trailing plants makes for a thoughtful gift or a stunning addition to your own collection.",
        "id": 13,
        "images": JSON.stringify([
          {
            "pot_color": "white",
            "src": "https://static-task-assets.react-formula.com/pothos_set_white.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/pothos_set_black.jpeg"
          }
        ]),
        "name": "Pothos Set",
        "price": 57
      },
      {
        "botanical_name": "Ficus microcarpa",
        "care_instructions": "Place the Ficus Ginseng in bright, indirect light. Water moderately, allowing the top inch of soil to dry out between waterings. Maintain high humidity by misting regularly, and feed with a balanced liquid fertilizer every 4-6 weeks during the growing season.",
        "description": "Ficus Ginseng is a unique and ornamental houseplant known for its thick, pot-bellied trunk and glossy, oval-shaped leaves. This bonsai-style plant adds a touch of elegance and interest to indoor spaces with its sculptural appearance.",
        "id": 35,
        "images": JSON.stringify([
          {
            "pot_color": "stone",
            "src": "https://static-task-assets.react-formula.com/ficus_ginseng_stone.jpeg"
          },
          {
            "pot_color": "sky",
            "src": "https://static-task-assets.react-formula.com/ficus_ginseng_sky.jpeg"
          },
          {
            "pot_color": "black",
            "src": "https://static-task-assets.react-formula.com/ficus_ginseng_black.jpeg"
          }
        ]),
        "name": "Ficus Ginseng",
        "price": 57
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
