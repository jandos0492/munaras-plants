import { useContext } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../../store/session";


const MobileMenuModal = ({ onCartOpenClick }) => {

    const username = useSelector((state) => state.session.user?.username);
    const dispatch = useDispatch();

    const signOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-800 text-emerald-200 flex flex-col items-start pt-12 pr-12 text-lg pb-6 rounded-bl-lg shadow-md"
        >
            <div className="px-8 py-4">
                <i className="mr-2 text-2xl fa-solid fa-user"></i>
                {username}
            </div>
            <button onClick={signOut} className="px-8 py-4">
                <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
                sign out
            </button>
            <button onClick={onCartOpenClick} className="px-8 py-4">
                <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
                cart
            </button>
        </motion.div>
    );
};

export default MobileMenuModal;
