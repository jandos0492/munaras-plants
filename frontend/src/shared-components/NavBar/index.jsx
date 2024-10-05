import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/CartModal/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";
import * as sessionActions from "../../store/session";
import RedirectToSignInIfSigendOut from "../RedirectToSignInIfSigendOut";

const NavBar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const username = useSelector((state) => state.session.user?.username);
    const dispatch = useDispatch();

    const signOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <RedirectToSignInIfSigendOut>
            <>
                <nav
                    onMouseLeave={() => setUserMenuOpen(false)}
                    className="bg-emerald-800 flex justify-center font-lato"
                >
                    <div className="w-full max-w-5xl flex justify-between items-center px-8 py-2">
                        <Link to="/plants">
                            <div className="flex flex-col items-center font-playfair text-white text-2xl">
                                <img
                                    className="w-10"
                                    src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                                    alt="capstone_logo_light"
                                />
                                MJ's Plants
                            </div>
                        </Link>
                        <div className="hidden sm:flex flex-1 flex justify-end">
                            <div className="min-w-32 relative">
                                <button
                                    onClick={() => {
                                        setUserMenuOpen(true);
                                    }}
                                    className="text-emerald-200 flex items-center"
                                >
                                    <i className="fa-solid fa-user mr-2 text-xl"></i>
                                    {username}
                                </button>
                                {userMenuOpen && (
                                    <div className="absolute bottom-[-46px] left-0 bg-white mt-20 rounded-md shadow-md">
                                        <button
                                            onClick={signOut}
                                            className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                                        >
                                            <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                                            sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => setCartOpen(true)}
                                className="text-emerald-200 flex items-center"
                            >
                                <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
                                cart
                            </button>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="flex sm:hidden"
                        >
                            <i className="fa-solid fa-bars text-4xl text-emerald-400"></i>
                        </button>
                    </div>
                </nav>
                <ModalWrapper
                    isOpen={cartOpen}
                    onCloseClick={() => setCartOpen(false)}
                >
                    <CartModal setCartOpen={setCartOpen} />
                </ModalWrapper>
                <ModalWrapper
                    isOpen={mobileMenuOpen}
                    onCloseClick={() => setMobileMenuOpen(false)}
                >
                    <MobileMenuModal
                        onCartOpenClick={() => {
                            setCartOpen(true);
                            setMobileMenuOpen(false);
                        }}
                    />
                </ModalWrapper>
            </>
        </RedirectToSignInIfSigendOut>
    );
};

export default NavBar;
