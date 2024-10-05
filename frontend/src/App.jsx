import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import PlantListPage from "./pages/PlantListPage";
import PlantShowPage from "./pages/PlantShowPage";
import ScrollToTop from "./shared-components/ScrollToTop";
import * as sessionActions from "./store/session";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <ScrollToTop />
            {isLoaded && (
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/plants" element={<PlantListPage />} />
                    <Route
                        path="/plants/:plantId"
                        element={<PlantShowPage />}
                    />
                </Routes>
            )}
        </>
    );
};

export default App;
