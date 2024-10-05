import apiFetch from "./apiFetch";

export const getCart = () => apiFetch("GET", "/api/cart");

export const addPlantToCart = ({ plantId, quantity, potColor, imageSrc, plantName, pricePerUnit }) => apiFetch("POST", `/api/cart/plants/${plantId}`, {
    image_src: imageSrc,
    plant_name: plantName,
    price_per_unit: pricePerUnit,
    quantity,
    pot_color: potColor,
});

export const removeItemFromCart = ({ itemId }) => apiFetch("DELETE", `/api/cart/${itemId}`);