import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandomIdx } from "../../shared-components/util";
import "react-medium-image-zoom/dist/styles.css";

const PlantInfoSection = ({ plant }) => {
    const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    return (
        <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col flex-1">
                <div className="block md:hidden mb-8">
                    <PlantHeading plant={plant} />
                </div>
                {plant.images &&
                    plant.images[0]?.src &&
                    (isDesktop ? (
                        <Zoom>
                            <img
                                className="rounded-md"
                                src={plant.images[imageIdx].src}
                                alt={plant.name}
                            />
                        </Zoom>
                    ) : (
                        <img
                            className="rounded-md"
                            src={plant.images[imageIdx].src}
                            alt={plant.name}
                        />
                    ))}
                <div className="flex mt-4">
                    <BenefitBox
                        icon="far fa-check-circle"
                        title="Guaranteed Healthy"
                        description="Guaranteed to arrive healthy or your money back"
                    />
                    <div className="bg-slate-300 w-px"></div>
                    <BenefitBox
                        icon="fa-regular fa-truck-fast"
                        title="Free Shipping"
                        description="Get free ground shipping on orders of $50 or more"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1 md:px-8">
                <div className="hidden md:block">
                    <PlantHeading plant={plant} />
                </div>
                <p className="text-slate-600 leading-relaxed mt-6">
                    {plant.description}
                </p>
                <PlantPurchaseOptions
                    plant={plant}
                    imageIdx={imageIdx}
                    setImageIdx={setImageIdx}
                />
            </div>
        </div>
    );
};

export default PlantInfoSection;
