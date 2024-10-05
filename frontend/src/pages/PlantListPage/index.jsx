import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../../shared-components/NavBar";
import PlantItem from "./PlantItem";
import LoadingSpinner from "../../shared-components/LoadingSpinner";

const PlantListPage = () => {
    const [plants, setPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:3000/api/plants`);
            const data = await response.json();
            setPlants(data);
            setIsLoading(false);
        })();
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         setIsLoading(true);
    //         const response = await plantService.getPlants();
    //         const data = await response.json();
    //         setPlants(data);
    //         setIsLoading(false);
    //     })();
    // }, []);

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-green-50">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="flex justify-center py-24">
                        <div className="w-full max-w-5xl">
                            <div className="font-playfair text-4xl text-emerald-800 mb-6 px-4">
                                Plants In Stock
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {plants.map((plant, idx) => (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            translateY: "20px",
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            translateY: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.3 + (idx % 3) * 0.2,
                                            duration: 0.4,
                                        }}
                                        key={plant.id}
                                    >
                                        <PlantItem plant={plant} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PlantListPage;
