import apiFetch from "./apiFetch"

export const getPlants = () => apiFetch("GET", "/api/plants");

export const getPlantById = ({ id }) => apiFetch("GET", `/api/plants/${id}`)