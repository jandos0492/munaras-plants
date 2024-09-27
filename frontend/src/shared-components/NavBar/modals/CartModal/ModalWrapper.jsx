import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
    const backgroundDivRef = useRef();

    if (!isOpen) {
        return null;
    }

    return (
        <RemoveScroll>
            <div
                ref={backgroundDivRef}
                onClick={(e) => {
                    if (e.target === backgroundDivRef.current) {
                        onCloseClick();
                    }
                }}
                className="fixed top-0 left-0 w-full h-full items-start bg-black/30 backdrop-blur-sm flex justify-end font-lato"
            >
                <button
                    className="absolute top-0 right-0 p-2 text-4xl text-emerald-400"
                    onClick={onCloseClick}
                >
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {children}
            </div>
        </RemoveScroll>
    );
};

export default ModalWrapper;
